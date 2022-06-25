import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Progress stepper",
  "section": "components",
  "source": "html",
  "slug": "/components/progress-stepper/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/ProgressStepper/examples/ProgressStepper.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-progress-stepper"
  ],
  "examples": [
    "Basic",
    "Basic with descriptions",
    "Vertical, horizontal responsive",
    "Center aligned with descriptions",
    "Center aligned, vertical",
    "Vertical with descriptions",
    "Compact",
    "Compact, vertical",
    "Compact, vertical responsive",
    "Compact, vertical, centered",
    "Compact, centered",
    "Basic with an issue",
    "Basic with a failure",
    "Basic with Patternfly icons",
    "With help text"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n    </div>\n  </li>\n</ol>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Basic with descriptions': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the first thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the second thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the last thing to happen</div>\n    </div>\n  </li>\n</ol>","title":"Basic with descriptions","lang":"html"}}>
      
    </Example>,
  'Vertical, horizontal responsive': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper pf-m-vertical-on-lg pf-m-horizontal-on-2xl\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the first thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the second thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the last thing to happen</div>\n    </div>\n  </li>\n</ol>","title":"Vertical, horizontal responsive","lang":"html"}}>
      
    </Example>,
  'Center aligned with descriptions': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper pf-m-center\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the first thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the second thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the last thing to happen</div>\n    </div>\n  </li>\n</ol>","title":"Center aligned with descriptions","lang":"html"}}>
      
    </Example>,
  'Center aligned, vertical': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper pf-m-center pf-m-vertical\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the first thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the second thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the last thing to happen</div>\n    </div>\n  </li>\n</ol>","title":"Center aligned, vertical","lang":"html"}}>
      
    </Example>,
  'Vertical with descriptions': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper pf-m-vertical\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the first thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the second thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the last thing to happen</div>\n    </div>\n  </li>\n</ol>","title":"Vertical with descriptions","lang":"html"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper pf-m-compact\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the first thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the second thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the last thing to happen</div>\n    </div>\n  </li>\n</ol>","title":"Compact","lang":"html"}}>
      
    </Example>,
  'Compact, vertical': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper pf-m-vertical pf-m-compact\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the first thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the second thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the last thing to happen</div>\n    </div>\n  </li>\n</ol>","title":"Compact, vertical","lang":"html"}}>
      
    </Example>,
  'Compact, vertical responsive': props => 
    <Example {...pageData} {...props} {...{"code":"<ol\n  class=\"pf-c-progress-stepper pf-m-vertical-on-lg pf-m-horizontal-on-xl pf-m-compact\"\n>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the first thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the second thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the last thing to happen</div>\n    </div>\n  </li>\n</ol>","title":"Compact, vertical responsive","lang":"html"}}>
      
    </Example>,
  'Compact, vertical, centered': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper pf-m-center pf-m-vertical pf-m-compact\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the first thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the second thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the last thing to happen</div>\n    </div>\n  </li>\n</ol>","title":"Compact, vertical, centered","lang":"html"}}>
      
    </Example>,
  'Compact, centered': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper pf-m-center pf-m-compact\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the first thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the second thing to happen</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n      <div\n        class=\"pf-c-progress-stepper__step-description\"\n      >This is the last thing to happen</div>\n    </div>\n  </li>\n</ol>","title":"Compact, centered","lang":"html"}}>
      
    </Example>,
  'Basic with an issue': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-warning\"\n    aria-label=\"step with issue,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Fourth step</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Fifth step</div>\n    </div>\n  </li>\n</ol>","title":"Basic with an issue","lang":"html"}}>
      
    </Example>,
  'Basic with a failure': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">First step</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Second step</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Third step</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-danger\"\n    aria-label=\"current step,step with failure,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Fourth step</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Fifth step</div>\n    </div>\n  </li>\n</ol>","title":"Basic with a failure","lang":"html"}}>
      
    </Example>,
  'Basic with Patternfly icons': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Successful completion</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-in-progress\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">In process</div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-pending\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Pending</div>\n    </div>\n  </li>\n</ol>","title":"Basic with Patternfly icons","lang":"html"}}>
      
    </Example>,
  'With help text': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-progress-stepper\">\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-success\"\n    aria-label=\"completed step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <button\n        class=\"pf-c-progress-stepper__step-title pf-m-help-text\"\n        type=\"button\"\n      >First step</button>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-danger\"\n    aria-label=\"step with failure,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <button\n        class=\"pf-c-progress-stepper__step-title pf-m-help-text\"\n        type=\"button\"\n      >Second step</button>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-current pf-m-info\"\n    aria-label=\"current step,in process step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\">\n        <i class=\"pficon pf-icon-resources-full\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <button\n        class=\"pf-c-progress-stepper__step-title pf-m-help-text\"\n        type=\"button\"\n      >Third step</button>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-progress-stepper__step pf-m-pending\"\n    aria-label=\"pending step,\"\n  >\n    <div class=\"pf-c-progress-stepper__step-connector\">\n      <span class=\"pf-c-progress-stepper__step-icon\"></span>\n    </div>\n    <div class=\"pf-c-progress-stepper__step-main\">\n      <div class=\"pf-c-progress-stepper__step-title\">Fourth step</div>\n    </div>\n  </li>\n</ol>","title":"With help text","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Basic with descriptions"])}
    {React.createElement(pageData.examples["Vertical, horizontal responsive"])}
    {React.createElement(pageData.examples["Center aligned with descriptions"])}
    {React.createElement(pageData.examples["Center aligned, vertical"])}
    {React.createElement(pageData.examples["Vertical with descriptions"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Compact, vertical"])}
    {React.createElement(pageData.examples["Compact, vertical responsive"])}
    {React.createElement(pageData.examples["Compact, vertical, centered"])}
    {React.createElement(pageData.examples["Compact, centered"])}
    {React.createElement(pageData.examples["Basic with an issue"])}
    {React.createElement(pageData.examples["Basic with a failure"])}
    {React.createElement(pageData.examples["Basic with Patternfly icons"])}
    {React.createElement(pageData.examples["With help text"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The progress stepper is intended to show progress through a finite number of discrete steps.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Add a modifier class to the progress stepper to change the orientation or alignment: `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-center`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-vertical`}
      </code>
      {`, or `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-compact`}
      </code>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Steps can be modified with `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-success`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-warning`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-danger`}
      </code>
      {`, and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-info`}
      </code>
      {` to change their color. Use modifiers `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-pending`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-current`}
      </code>
      {` to indicate progress through the steps.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Attribute`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[State of the step]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper__step`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the step.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper__step-icon <i>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides icon for assistive technologies. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Class`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ol>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies default progress stepper styling. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper__step`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines each step of the progress stepper. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.progress-stepper__step-connector`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates the connecting line between steps `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.progress-stepper__step-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates the step node and contains the icon designating the type of step. This element is required, but may be empty if no icon is used for the step. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.progress-stepper__step-main`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Contains the main text content of the step. This element is required, but may be empty if title and description are not used. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.progress-stepper__step-title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Contains the title of the step. `}
              <strong>
                {`Note:`}
              </strong>
              {` the step title is a `}
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
              {` when it has `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-help-text`}
              </code>
              {` and is used to trigger a popover with help text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.progress-stepper__step-description`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Contains the description of the step.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-center`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to center each step.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-vertical{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies progress stepper vertical layout at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-horizontal{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies progress stepper horizontal layout at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-compact`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for compact styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-success`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper__step`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for success styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-warning`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper__step`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for warning styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-danger`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper__step`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for danger styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-info`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper__step`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for info styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-current`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper__step`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies styling for the current step.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-pending`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper__step`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies styling for pending steps.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-help-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress-stepper__step-title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies styling for steps that have help text.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsProgressStepperHtmlDocs';
Component.pageData = pageData;

export default Component;
