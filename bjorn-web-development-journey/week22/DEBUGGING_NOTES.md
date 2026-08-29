# Debugging notes

## Bug 1
**Problem:** The JavaScript originally searched for `nameinput` instead of `nameInput`.

**What happened:** The browser console showed that the element was `null`.

**Fix:** I corrected the ID so it exactly matched the HTML.

## Bug 2
**Problem:** A click listener was attached to the wrong button variable.

**What happened:** Clicking the hello button did nothing.

**Fix:** I checked the variable names and connected the listener to `helloButton`.

## Bug 3
**Problem:** The CSS selector was written as `box` instead of `.box`.

**What happened:** The main card styling did not appear.

**Fix:** I used Developer Tools and changed the selector to `.box`.
