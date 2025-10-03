import { z } from 'zod';

export const TeamMemberSchema = z.object({
  slug: z.string(),
  name: z.string(),
  role: z.string(),
  roles: z.array(z.string()),
  skills: z.array(z.string()),
  bio: z.string(),
  email: z.string().email(),
  location: z.string(),
  links: z.object({
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }),
  avatar: z.string(),
  cvUrl: z.string(),
  highlights: z.array(z.string()),
});

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  team: z.array(z.string()), // Array of team member slugs
  featured: z.boolean().optional(),
  thumb: z.string(),
  links: z.object({
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type Project = z.infer<typeof ProjectSchema>;
