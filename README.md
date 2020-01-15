# cursorColumnSelect on true lines

This extensions changes the multi cursor select of cursorColumnSelectUp/DownWord to operates on true lines. This is especially useful when Word Wrap is enabled. This extensions provides two commands Up/Down that operate on the actual lines not on the wrapped lines.

Original Behavior of `cursorColumnSelectDown`
![Original Behavior of cursorColumnSelectDown](/original.gif)

New Behavior of `cursorColumnSelectDownOnTrueLines`
![New Behavior of cursorColumnSelectDownOnTrueLines](/new.gif)

* `onTrueLines.cursorColumnSelectUpOnTrueLines`: extends the multi cursor selection up a line based on true lines and not on visible lines
* `onTrueLines.cursorColumnSelectDownOnTrueLines`: extends the multi cursor selection down a line and not on visible lines