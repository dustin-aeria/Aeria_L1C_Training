import { ReactNode } from 'react';

interface InstructorNoteProps {
  children: ReactNode;
  type?: 'info' | 'activity' | 'keypoint';
}

export default function InstructorNote({ children, type = 'info' }: InstructorNoteProps) {
  const bgColor = {
    info: 'bg-blue-50 border-blue-200',
    activity: 'bg-green-50 border-green-200',
    keypoint: 'bg-yellow-50 border-yellow-200'
  }[type];

  const icon = {
    info: 'ℹ️',
    activity: '🎯',
    keypoint: '💡'
  }[type];

  return (
    <div className={`${bgColor} border-l-4 p-4 mb-4 rounded-r-lg`}>
      <div className="flex">
        <div className="flex-shrink-0 text-xl mr-3">{icon}</div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
