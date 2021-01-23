---
title: Introducation
order: 1
toc: menu
nav:
  title: Guide
  order: 1
---

### Overall Introduction

- Technical scheme of PC terminal of business line

  1. ii-admin-pro：The PC of backstage management adopts umi scaffold to encapsulate general business logic and authentication logic
  2. ii-admin-ui：Company UI specification
  3. ii-admin-base：Base on II-ADMIN-UI component for basic encapsulation, can be common to each line of business
  4. ii-admin-business：Strong correlation with business components, encapsulation of typical business logic, convenient for use within the business, may not be common across business lines
  5. ii-cli：The scaffold
     ...

- Technical scheme of H5 terminal of business line
  1. The main body uses TARO to carry on H5, each small program end development
