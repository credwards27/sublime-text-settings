#
# Simple plugin to change the font size for a specific view only, without
# changing the font size user preference.
#
# Based on the snippets at https://forum.sublimetext.com/t/setting-different-font-sizes-for-different-tabs-files/15685/2.
#
# Credit: https://forum.sublimetext.com/u/OdatNurd
#

# Dependencies
import sublime
import sublime_plugin

# Command to increase font size for the current view only.
#
class IncreaseLocalFontSizeCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        current = self.view.settings().get("font_size", 10)
        self.view.settings().set("font_size", current + 1)

# Command to decrease font size for the current view only.
#
class DecreaseLocalFontSizeCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        current = self.view.settings().get("font_size", 10)
        self.view.settings().set("font_size", current - 1)

# Command to reset font size to the default for the current view only.
#
class ResetLocalFontSizeCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        self.view.settings().erase("font_size")
