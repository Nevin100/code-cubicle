'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface TimelineEvent {
  title: string;
  description: string;
  version: string;
  date: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const sortedEvents = [...events]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .reverse();

  const firstEventRef = useRef<HTMLDivElement | null>(null);
  const [lineTop, setLineTop] = useState(0);

  useEffect(() => {
    if (firstEventRef.current) {
      setLineTop(firstEventRef.current.offsetTop);
    }
  }, []);

  return (
    <div id="timeline" className="relative w-full" aria-label="Event timeline">
      {/* Vertical line starting from first event */}
      <div
        className="absolute left-1/2 w-0.5 hidden md:block"
        style={{
          top: lineTop,
          bottom: 0,
          transform: 'translateX(-50%)',
        }}
      />

      {sortedEvents.map((event, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            ref={index === 0 ? firstEventRef : null}
            className={`relative flex flex-col md:flex-row items-center w-full mb-8 ${
              isEven ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Left Spacer for Desktop */}
            <div className="hidden md:block w-5/12"></div>
           

            {/* Card */}
            <motion.div
              className="w-full md:w-5/12"
              initial={{ opacity: 0, x: isEven ? 100 : -100, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Card
                className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/20 ${
                  isEven ? 'md:mr-auto' : 'md:ml-auto'
                } md:max-w-md`}
              >
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-bold">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    {format(new Date(event.date), 'do MMMM yyyy')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Badge
                    variant={
                      event.version === 'Offline' ? 'default' : 'secondary'
                    }
                  >
                    {event.version}
                  </Badge>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
