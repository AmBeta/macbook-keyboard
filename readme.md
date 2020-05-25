# Macbook Keyboard

A tiny library to display a reactive macbook keyboard on screen.

## Feature

- vanilla, no framework required
- no dependency
- dark/light theme
- i18n friendly

## Usage

```javascript
MacbookKeyboard();
```

## Options

```json
{
  // "dark", "light"
  "theme": "dark",
  // display label on each key
  "showLabel": true,
  // map key settings
  "keyMappings": {
    "Enter": {
      "label": ["enter", "回车"],
    },
  },
}
```

## Thanks

This project is inspired by [react-mac-keyboard](https://github.com/uiwjs/react-mac-keyboard).

## License

MIT
