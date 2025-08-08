import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react'
import { getMenus, getMenuById } from './services/api'

interface TreeNodeData {
  id: string;
  label: string;
  children?: TreeNodeData[];
}

interface TreeNodeProps {
  node: TreeNodeData;
  level: number;
}

function TreeNode({ node, level }: TreeNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const toggleExpanded = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  const getPaddingLeft = () => {
    return `${level * 24 + 8}px`;
  };

  return (
    <div className="select-none">
      {level > 0 && (
        <div
          className="absolute border-t border-gray-300"
          style={{
            left: `${(level - 1) * 24 + 16}px`,
            top: '50%',
            width: '12px',
            transform: 'translateY(-50%)'
          }}
        />
      )}

      <div
        className="flex items-center py-1 px-2 hover:bg-gray-50 cursor-pointer group relative"
        style={{ paddingLeft: getPaddingLeft() }}
        onClick={toggleExpanded}
      >
        <div className="flex items-center min-w-0 flex-1">
          {hasChildren ? (
            <div className="flex-shrink-0 mr-1">
              {isExpanded ? (
                <ChevronDown size={16} className="text-gray-600" />
              ) : (
                <ChevronRight size={16} className="text-gray-600" />
              )}
            </div>
          ) : (
            <div className="w-4 mr-1 relative">
              <div className="w-1 h-1 bg-gray-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          )}
          <span className="text-sm text-gray-800 truncate">{node.label}</span>
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div className="relative">
          {node.children!.some(child => child.children && child.children.length > 0) && (
            <div
              className="absolute border-l border-gray-300"
              style={{
                left: `${level * 24 + 16}px`,
                top: '0',
                bottom: '0',
                width: '1px'
              }}
            />
          )}
          {node.children!.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function TreeViewMenu() {
  const treeData = async () => {
    const resp = await getMenus()
    return resp.data
  } 

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-2">
        {treeData.map((node) => (
          <TreeNode key={node.id} node={node} level={0} />
        ))}
      </div>
    </div>
  );
}

export default TreeViewMenu;