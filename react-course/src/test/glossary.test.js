import { describe, it, expect } from 'vitest';
import { glossaryTerms } from '../data/glossary';

describe('Glossary Data', () => {
  it('should have a list of technical terms', () => {
    expect(glossaryTerms.length).toBeGreaterThan(0);
  });

  it('should have Portuguese terms (PT-PT)', () => {
    const component = glossaryTerms.find(item => item.term === 'Componente');
    expect(component).toBeDefined();
    expect(component.definition).toContain('utilizador');
  });

  it('should not contain Brazilian terms like "usuário"', () => {
    glossaryTerms.forEach(item => {
      expect(item.definition.toLowerCase()).not.toContain('usuário');
    });
  });
});
