import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "RoboFest 2.0 | ISD Lab SRMIST | International Robotics Competition",
  description: "RoboFest 2.0 is the flagship international robotics competition organised by the Intelligent Systems Design (ISD) Lab, Department of Computing Technologies, SRM Institute of Science and Technology. Explore robotics competitions, project expo, workshops, innovation and engineering excellence.",
  keywords: [
    "Robofest", "Robofest India", "RoboFest 2.0", "International Robotics Competition",
    "Robotics Competition India", "Robotics Festival", "SRM Robotics", "SRMIST",
    "SRM Chennai", "ISD Lab", "Intelligent Systems Design Lab", "Department of Computing Technologies",
    "Engineering", "Automation", "AI", "Machine Learning", "Embedded Systems",
    "Arduino", "ROS", "Autonomous Robots", "Robot War", "RoboWar", "Robo Soccer",
    "Line Follower", "Obstacle Race", "Drone Race", "Project Expo", "Innovation",
    "STEM", "Engineering Competition", "Tech Fest", "Hackathon", "Harshil Malhotra",
    "Harshil", "Harshil Robotics", "Harshil Developer", "President ISD Lab",
    "ISD Lab President", "Web Developer", "Full Stack Developer", "Next.js",
    "Cloud", "Robotics Developer"
  ],
  authors: [{ name: "Harshil Malhotra" }],
  creator: "Harshil Malhotra",
  publisher: "ISD Lab SRMIST",
  applicationName: "RoboFest 2.0",
  appleWebApp: {
    title: "RoboFest 2.0",
  },
  alternates: {
    canonical: "https://robofest.in/",
  },
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    type: "website",
    title: "RoboFest 2.0 | ISD Lab | SRM Institute of Science and Technology",
    description: "India's premier international robotics competition organised by ISD Lab, Department of Computing Technologies, SRMIST.",
    url: "https://robofest.in/",
    siteName: "RoboFest",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoboFest 2.0 | International Robotics Competition",
    description: "Experience India's leading robotics festival hosted by ISD Lab at SRM Institute of Science and Technology.",
    creator: "@harshilhm",
    site: "@harshilhm",
  },
  other: {
    language: "English",
    "revisit-after": "1 days",
    classification: "Robotics, Engineering, Technology",
    rating: "General",
    distribution: "Global",
    coverage: "Worldwide",
    target: "students, robotics engineers, researchers",
    subject: "Robotics Competition",
    copyright: "ISD Lab SRMIST",
    "reply-to": "robofest@srmist.edu.in",
  },
};

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"Person",
      "@id":"https://harshilmalhotra.dev/#person",
      "name":"Harshil Malhotra",
      "url":"https://harshilmalhotra.dev/",
      "jobTitle":"President, Intelligent Systems Design Lab",
      "worksFor":{
        "@type":"Organization",
        "name":"ISD Lab, SRM Institute of Science and Technology"
      },
      "sameAs":[
        "https://github.com/Harshilmalhotra",
        "https://www.linkedin.com/in/harshilmalhotra/",
        "https://www.instagram.com/harshil.hm/",
        "https://www.credly.com/users/harshilmalhotra"
      ]
    },
    {
      "@type":"Organization",
      "@id":"https://robofest.in/#organization",
      "name":"ISD Lab SRMIST",
      "url":"https://robofest.in/",
      "logo":"https://robofest.in/logo.png",
      "sameAs":[
        "https://isdlabsrm.in/"
      ]
    },
    {
      "@type":"Event",
      "name":"RoboFest 2.0",
      "eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode",
      "eventStatus":"https://schema.org/EventScheduled",
      "startDate":"2026-08-19",
      "endDate":"2026-08-21",
      "location":{
        "@type":"Place",
        "name":"SRM Institute of Science and Technology",
        "address":"Kattankulathur, Chennai, Tamil Nadu, India"
      },
      "organizer":{
        "@id":"https://robofest.in/#organization"
      },
      "url":"https://robofest.in/"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="me" href="https://harshilmalhotra.dev/" />
        <link rel="me" href="https://github.com/Harshilmalhotra" />
        <link rel="me" href="https://www.linkedin.com/in/harshilmalhotra/" />
        <link rel="me" href="https://www.instagram.com/harshil.hm/" />
        <link rel="me" href="https://www.credly.com/users/harshilmalhotra" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
