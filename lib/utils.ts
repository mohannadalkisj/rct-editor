import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const menuItems = {
  File: [
    { label: 'New', shortcut: '⌘N' },
    { label: 'Open...', shortcut: '⌘O' },
    { label: 'Save', shortcut: '⌘S' },
    { label: 'Save as...', shortcut: '⇧⌘S' },
    { type: 'separator' },
    { label: 'Print...', shortcut: '⌘P' },
  ],
  Edit: [
    { label: 'Undo', shortcut: '⌘Z' },
    { label: 'Redo', shortcut: '⇧⌘Z' },
    { type: 'separator' },
    { label: 'Cut', shortcut: '⌘X' },
    { label: 'Copy', shortcut: '⌘C' },
    { label: 'Paste', shortcut: '⌘V' },
    { type: 'separator' },
    { label: 'Find...', shortcut: '⌘F' },
    { label: 'Replace...', shortcut: '⌘H' },
  ],
  View: [
    { label: 'Show ruler' },
    { label: 'Show sidebar' },
    { type: 'separator' },
    { label: 'Full screen', shortcut: '⌘⇧F' },
  ],
  Format: [
    { label: 'Bold', shortcut: '⌘B' },
    { label: 'Italic', shortcut: '⌘I' },
    { label: 'Underline', shortcut: '⌘U' },
    { type: 'separator' },
    { label: 'Align left' },
    { label: 'Align center' },
    { label: 'Align right' },
    { label: 'Justify' },
  ],
  Insert: [
    { label: 'Image...' },
    { label: 'Table...' },
    { label: 'Link...', shortcut: '⌘K' },
    { type: 'separator' },
    { label: 'Page break' },
    { label: 'Page numbers' },
  ],
  Tools: [
    { label: 'Spelling & grammar' },
    { label: 'Word count' },
    { type: 'separator' },
    { label: 'Preferences...' },
  ],
  Help: [
    { label: 'Documentation' },
    { label: 'Keyboard shortcuts' },
    { type: 'separator' },
    { label: 'About Rct Editor' },
  ],
};
