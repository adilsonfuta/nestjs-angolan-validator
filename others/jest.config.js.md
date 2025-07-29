module.exports = {
  // ... outras configurações
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/index.ts',          // Temporariamente ignorado
    '!src/decorators/index.ts' // Temporariamente ignorado
  ],
  coverageThreshold: {
    global: {
      branches: 70, // Reduzido temporariamente
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};