export interface PATTERN_PROPS {
  name: string,
  url: string,
  pros?: string[],
  cons?: string[],
}

const TRAITS = {
  debugging: 'debugging',
  formatting: 'formatting',
  notifications: 'notifications',
  performance: 'performance',
  pureFunctions: 'pure functions',
  validation: 'validation',
  stateManagement: 'state management',
  memory: 'memory',
  antipattern: 'not an anti-pattern',
  testing: 'testing',
  clarity: 'clarity',
  globalScope: 'global scope',
  scalesForComplexity: 'scales for complexity',
  immutable: 'immutable',
  globalInstance: 'global instance',
  goBetween: 'go between',
}

const SINGLETON_PATTERN: PATTERN_PROPS = {
  name: 'Singleton',
  url: 'https://www.patterns.dev/posts/singleton-pattern/',
  pros: [
    TRAITS.stateManagement,
    TRAITS.memory
  ],
  cons: [
    TRAITS.memory,
    TRAITS.antipattern,
    TRAITS.antipattern,
    TRAITS.testing,
    TRAITS.clarity,
    TRAITS.globalScope,
    TRAITS.scalesForComplexity,
    TRAITS.immutable
  ],
}

const PROXY_PATTERN: PATTERN_PROPS = {
  name: 'Proxy',
  url: 'https://www.patterns.dev/posts/proxy-pattern/',
  pros: [
    TRAITS.debugging,
    TRAITS.formatting,
    TRAITS.notifications,
    TRAITS.pureFunctions,
    TRAITS.validation,
    TRAITS.globalInstance,
    TRAITS.goBetween,
  ],
  cons: [
    TRAITS.performance
  ],
}

export const patterns: PATTERN_PROPS[] = [SINGLETON_PATTERN, PROXY_PATTERN];
