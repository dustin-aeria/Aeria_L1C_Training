import { ReactNode } from 'react';

interface CourseSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function CourseSection({ title, children, className = '' }: CourseSectionProps) {
  return (
    <section className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </section>
  );
}
