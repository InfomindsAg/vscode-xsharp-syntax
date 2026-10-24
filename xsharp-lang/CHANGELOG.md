# Change Log

All notable changes to the "xsharp-lang" extension will be documented in this file.

## [1.0.0]

- Initial release

## [1.0.1]

- Fix package.json, readme

## [1.0.2]

- Remove backslash as escape character
- Use default highlighting of unhandled keywords

## [1.0.3]

- Highlight procedures like functions
- Support interpolated strings and escaping characters
- Fix inherit, implements highlighting

## [1.0.4]

- Fixed issue with extended string literal (thanks to joshua-azyra)

## [1.1.0]

- Highlight `&&`, `*` and `///` comments
- Stop strings at the end of the line, so an open quote does not color the rest of the file
- Highlight all number literals, dates, `.T.`/`.F.`, `NIL` and compiler macros like `__ENTITY__`
- Highlight preprocessor directives, including `#if`, `#error` and `#stdout`
- Do not color member names after `:` or `.` as keywords
- Highlight names after `ACCESS`, `ASSIGN`, `PROPERTY`, `DEFINE`, `GLOBAL`, `VOSTRUCT`, `UNION`, `DELEGATE` and `EVENT`
- Add bracket strings, `i"…"` without escapes and case-insensitive string prefixes
- Sync keywords and types with the X# compiler (`WITH`, `LONG`, `DATETIME`, `THIS` and more)
- Remove words that are not X# keywords
- Fix one-line properties and `RECOVER USING`
- Use only regular expressions that the IntelliJ TextMate engine accepts
- Improve language configuration: `#region` folding, indentation rules and word pattern
