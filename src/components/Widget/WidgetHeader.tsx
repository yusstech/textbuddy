"use client";

import React, { useState, useCallback, useRef, useEffect } from 'react';

// Define TypeScript interfaces for the component props
interface WidgetHeaderProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
}

/**
 * WidgetHeader - The draggable header component for the TextBuddy widget
 */
const WidgetHeader: React.FC<WidgetHeaderProps> = ({ 
  title, 
  isOpen, 
  onToggle,
  onPositionChange
}) => {
  // Ref for the header element
  const headerRef = useRef<HTMLDivElement>(null);
  
  // State for tracking drag
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Handle mouse down event to start dragging
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  }, []);

  // Handle mouse move event during dragging
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      // Calculate new position
      const newPosition = {
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      };
      
      // Update widget position
      onPositionChange(newPosition);
    }
  }, [isDragging, dragOffset, onPositionChange]);

  // Handle mouse up event to stop dragging
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    
    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div 
      ref={headerRef}
      className="bg-blue-500 dark:bg-blue-600 text-white p-2 cursor-move flex justify-between items-center"
      onMouseDown={handleMouseDown}
    >
      {isOpen ? (
        <>
          <span className="font-semibold">{title}</span>
          <button 
            onClick={onToggle}
            className="p-1 hover:bg-blue-600 dark:hover:bg-blue-700 rounded"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </>
      ) : (
        <button 
          onClick={onToggle}
          className="w-full h-full flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default WidgetHeader; 