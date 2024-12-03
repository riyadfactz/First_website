import {
  Code2,
  Terminal,
  Cpu,
  Smartphone,
  Wrench,
  Binary,
  Workflow,
  Database,
  Shield,
  GitBranch,
  Layers,
  Settings,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Skill {
  icon: LucideIcon;
  name: string;
  level: number;
  color: string;
}

export const skillsData: Skill[] = [
  // {
  //   icon: Code2,
  //   name: "Python Development",
  //   level: 95,
  //   color: "text-blue-400"
  // },
  {
    icon: Terminal,
    name: 'Python',
    level: 92,
    color: 'text-green-400',
  },
  {
    icon: Cpu,
    name: 'C Programming',
    level: 88,
    color: 'text-red-400',
  },
  // {
  //   icon: Binary,
  //   name: "Memory Management",
  //   level: 85,
  //   color: "text-yellow-400"
  // },
  // {
  //   icon: Wrench,
  //   name: "C++ Development",
  //   level: 90,
  //   color: "text-purple-400"
  // },
  {
    icon: Layers,
    name: 'Custom ROM Building',
    level: 86,
    color: 'text-orange-400',
  },
  {
    icon: Shield,
    name: 'Cyber Security',
    level: 88,
    color: 'text-cyan-400',
  },
  {
    icon: GitBranch,
    name: 'Version Control',
    level: 92,
    color: 'text-rose-400',
  },
];
