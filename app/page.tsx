'use client';

import { useState } from 'react';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Undo,
  Redo,
  Printer,
  Link2,
  Search,
  Mic,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { menuItems } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
export default function DocumentEditor() {
  const [content, setContent] = useState('');
  const [activeMenu, setActiveMenu] = useState<string | null>();

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-black text-white p-2">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold flex">
            {' '}
            <img src="/2rct.png" alt="" width={50} /> Editor
          </h1>
        </div>
      </header>

      <nav className="border-b bg-gray-50">
        <ul className="flex gap-1 px-2 py-1 text-sm">
          {Object.keys(menuItems).map((menuName) => (
            <DropdownMenu
              key={menuName}
              open={activeMenu === menuName}
              onOpenChange={(open) => setActiveMenu(open ? menuName : null)}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-7 px-3 text-sm font-normal"
                  onMouseEnter={() => activeMenu && setActiveMenu(menuName)}
                >
                  {menuName}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60">
                {menuItems[menuName as keyof typeof menuItems].map(
                  (item: any, index) =>
                    item.type === 'separator' ? (
                      <DropdownMenuSeparator key={index} />
                    ) : (
                      <DropdownMenuItem
                        key={index}
                        className="flex justify-between"
                      >
                        {item.label}
                        {item.shortcut && (
                          <span className="text-xs text-muted-foreground">
                            {item.shortcut}
                          </span>
                        )}
                      </DropdownMenuItem>
                    )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </ul>
      </nav>
      {/* Toolbar */}
      <div className="border-b p-1 flex flex-wrap gap-1 items-center">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Printer className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Redo className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <Select defaultValue="arial">
          <SelectTrigger className="w-[180px] h-8">
            <SelectValue placeholder="Font" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="arial">Arial</SelectItem>
            <SelectItem value="times">Times New Roman</SelectItem>
            <SelectItem value="courier">Courier New</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="11">
          <SelectTrigger className="w-[80px] h-8">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            {[8, 9, 10, 11, 12, 14, 16, 18, 24, 36].map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Underline className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <AlignRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <List className="h-4 w-4" />
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Link2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mic className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 p-4">
        <textarea
          className="w-full h-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type your document content here..."
        />
      </div>
    </div>
  );
}
