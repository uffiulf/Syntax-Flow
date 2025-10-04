import React, { createContext, useContext, useMemo, useState } from 'react';
import { getProjects, getTeam } from './data';

interface SearchContextState {
  query: string;
  setQuery: (q: string) => void;
  selectedRoles: string[];
  toggleRole: (role: string) => void;
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  clearFilters: () => void;
  team: ReturnType<typeof getTeam>;
  projects: ReturnType<typeof getProjects>;
  filteredTeam: ReturnType<typeof getTeam>;
  filteredProjects: ReturnType<typeof getProjects>;
  allRoles: string[];
  allTags: string[];
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  allSkills: string[];
}

const SearchContext = createContext<SearchContextState | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const team = getTeam();
  const projects = getProjects();

  const allRoles = useMemo(() => Array.from(new Set(team.flatMap(m => m.roles))).sort(), [team]);
  const allTags = useMemo(() => Array.from(new Set(projects.flatMap(p => p.tags))).sort(), [projects]);
  const allSkills = useMemo(() => Array.from(new Set(team.flatMap(m => m.skills))).sort(), [team]);

  const [query, setQuery] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleRole = (role: string) => {
    setSelectedRoles(prev => prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]);
  };
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };
  const clearFilters = () => { setSelectedRoles([]); setSelectedTags([]); setSelectedSkills([]); };

  const normalized = (s: string) => s.toLowerCase();

  const filteredTeam = useMemo(() => {
    return team.filter(member => {
      const q = normalized(query);
      const matchesQuery = !q || [member.name, member.role, member.slug, ...member.skills].some(v => normalized(v).includes(q));
      const matchesRoles = selectedRoles.length === 0 || member.roles.some(r => selectedRoles.includes(r));
      const matchesSkills = selectedSkills.length === 0 || member.skills.some(s => selectedSkills.includes(s));
      return matchesQuery && matchesRoles && matchesSkills;
    });
  }, [team, query, selectedRoles, selectedSkills]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const q = normalized(query);
      const matchesQuery = !q || [project.title, project.summary, project.slug, ...project.tags].some(v => normalized(v).includes(q));
      const matchesTags = selectedTags.length === 0 || project.tags.some(t => selectedTags.includes(t));
      return matchesQuery && matchesTags;
    });
  }, [projects, query, selectedTags]);

  const value: SearchContextState = {
    query, setQuery, selectedRoles, toggleRole, selectedTags, toggleTag, clearFilters,
    team, projects, filteredTeam, filteredProjects, allRoles, allTags,
    selectedSkills, toggleSkill, allSkills,
  } as SearchContextState & any; // type augmentation

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be used within SearchProvider');
  return ctx;
};
