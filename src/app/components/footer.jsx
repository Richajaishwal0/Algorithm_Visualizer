'use client'

import { useEffect, useState } from 'react';
import GitHubButton from 'react-github-btn';

export default function Footer() {
  const [visitors, setVisitors] = useState(0)

  useEffect(() => {
    // Simulate fetching visitor count
    // In a real application, you would fetch this from an API
    setVisitors(Math.floor(Math.random() * 10000))
  }, [])

  return (
    <footer className="bg-background py-6 px-6 mt-12 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} NHR. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-2">
        </div>
      </div>
    </footer>
  )
}

