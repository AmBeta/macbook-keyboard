import { DEFAULT_OPTIONS, KEY_LIST } from './constants';
import './styles.scss';

const html = (strings, ...values) => strings.reduce((ret, str, idx) => {
  const value = values[idx];
  ret.push(str, Array.isArray(value) ? value.join('') : value);
  return ret;
}, []).join('');

/**
 * Get the actual container element.
 * @param {HTMLElement | string} container A container to render the keyboard to.
 */
const getContainer = (container) => {
  if (container instanceof HTMLElement) {
    return container;
  }
  if (typeof container === 'string') {
    return document.querySelector(container);
  }
  return document.body;
}

/**
 * Get the parsed key list.
 * @param {any} mappings An object to map key to custom key config.
 */
const getKeyList = (mappings) => {
  return KEY_LIST.map((keyConfig) => ({
    ...keyConfig,
    ...mappings[keyConfig.key],
  }));
};

export default function createKeyboard(options = {}) {
  const settings = {
    ...DEFAULT_OPTIONS,
    ...options,
  };
  const container = getContainer(settings.container);
  const keyList = getKeyList(settings.keyMappings);

  let pressed = [];

  /**
   * Set key pressed status.
   * @param {string} key
   * @param {boolean} force
   */
  const setPressed = (key, force = true) => {
    const $keys = container.querySelectorAll(`[data-key="${key}"]`);
    if ($keys.length === 0) return;
    // update ui
    $keys.forEach($key => $key.classList.toggle('pressed', force));
    // update pressed key list
    const index = pressed.indexOf(key);
    if (force && index < 0) {
      pressed.push(key);
    } else if (!force && index > -1) {
      pressed.splice(index, 1);
    }
  };

  /**
   * Check if a key is pressed.
   * @param {string} key
   */
  const isPressed = (key) => {
    return pressed.includes(key);
  };

  /**
   * Clear all pressed key.
   */
  const clearPressed = () => {
    [].concat(pressed).forEach((key) => {
      setPressed(key, false);
    });
  };

  /**
   * Toggle pressed status of a key.
   * @param {string} key
   * @param {boolean} force
   */
  const togglePressed = (key, force = !isPressed(key)) => {
    setPressed(key, force);
    return force;
  };

  const render = () => {
    const markup = html`
      <ul>
        ${keyList.map(({ key, label }) => html`
          <li data-key="${key}">
            ${settings.showLabel ? label.map(n => `<span>${n}</span>`) : ''}
          </li>
        `)}
      </ul>
    `;
    container.innerHTML = markup;
    container.classList.add(
      'macbook-keyboard',
      `theme-${settings.theme}`,
    );
  };

  render();

  return {
    check: isPressed,
    clear: clearPressed,
    toggle: togglePressed,
  };
}
