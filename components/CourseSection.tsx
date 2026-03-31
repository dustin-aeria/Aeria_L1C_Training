import { ReactNode } from 'react';

interface CourseSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function CourseSection({ title, children, className = '', id }: CourseSectionProps) {
  return (
    <section className={`mb-8 ${className}`} id={id}>
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">
        {title}
      </h2>
      <div className="text-gray-700">
        {children}
      </div>
    </section>
  );
}
