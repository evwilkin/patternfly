import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Description list",
  "section": "components",
  "source": "html",
  "slug": "/components/description-list/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/DescriptionList/examples/DescriptionList.md",
  "cssPrefix": [
    "pf-c-description-list"
  ],
  "examples": [
    "Default",
    "Term help text",
    "Default, two column",
    "Default, three column on lg breakpoint",
    "Horizontal",
    "Horizontal, two column",
    "Horizontal, three column on lg breakpoint",
    "Compact",
    "Compact horizontal",
    "Fluid horizontal",
    "Column fill",
    "Auto-fit basic",
    "Auto-fit, min width modified, grid template columns",
    "Auto-fit, min width modified, responsive grid template columns",
    "Default, responsive columns",
    "Horizontal, responsive columns",
    "Responsive, horizontal, vertical group layout",
    "Default, auto columns width",
    "Horizontal, auto column width",
    "Default, inline grid",
    "Display variant",
    "Description list group wrapper as card",
    "Display lg and card variant",
    "Display 2xl and card variant",
    "Display and card variant, three column on lg breakpoint",
    "Display and card variant, horizontal, modified term width",
    "Icons on terms"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default","lang":"html"}}>
      
    </Example>,
  'Term help text': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Term help text","lang":"html"}}>
      
    </Example>,
  'Default, two column': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-2-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div\n        class=\"pf-c-description-list__text\"\n      >This is a long description that should wrap to multiple lines in a multi-column layout.</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default, two column","lang":"html"}}>
      
    </Example>,
  'Default, three column on lg breakpoint': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-3-col-on-lg\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default, three column on lg breakpoint","lang":"html"}}>
      
    </Example>,
  'Horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal","lang":"html"}}>
      
    </Example>,
  'Horizontal, two column': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal pf-m-2-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal, two column","lang":"html"}}>
      
    </Example>,
  'Horizontal, three column on lg breakpoint': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal pf-m-3-col-on-lg\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal, three column on lg breakpoint","lang":"html"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-compact\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Compact","lang":"html"}}>
      
    </Example>,
  'Compact horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-compact pf-m-horizontal pf-m-2-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Compact horizontal","lang":"html"}}>
      
    </Example>,
  'Fluid horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal pf-m-fluid pf-m-2-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Fluid horizontal","lang":"html"}}>
      
    </Example>,
  'Column fill': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-fill-columns pf-m-2-col pf-m-3-col-on-lg\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div\n        class=\"pf-c-description-list__text\"\n      >This is a long description that should wrap to multiple lines in a multi-column layout.</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Column fill","lang":"html"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Column fill will modify the default placement of description list groups to fill from top to bottom using css column-count, instead of left to right. `}
        
        <strong>
          {`Note:`}
        </strong>
        {` using this modifier will change the layout so that horizontally adjacent groups are no longer aligned in the same row.`}
      </p>
    </Example>,
  'Auto-fit basic': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-auto-fit\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Auto-fit basic","lang":"html"}}>
      
    </Example>,
  'Auto-fit, min width modified, grid template columns': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-auto-fit\"\n  style=\"--pf-c-description-list--GridTemplateColumns--min: 200px;\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Auto-fit, min width modified, grid template columns","lang":"html"}}>
      
    </Example>,
  'Auto-fit, min width modified, responsive grid template columns': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-auto-fit\"\n  style=\"--pf-c-description-list--GridTemplateColumns--min-on-md: 100px; --pf-c-description-list--GridTemplateColumns--min-on-lg: 150px; --pf-c-description-list--GridTemplateColumns--min-on-xl: 200px; --pf-c-description-list--GridTemplateColumns--min-on-2xl: 300px;\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Auto-fit, min width modified, responsive grid template columns","lang":"html"}}>
      
    </Example>,
  'Default, responsive columns': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-2-col-on-lg pf-m-3-col-on-xl\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default, responsive columns","lang":"html"}}>
      
    </Example>,
  'Horizontal, responsive columns': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal, responsive columns","lang":"html"}}>
      
    </Example>,
  'Responsive, horizontal, vertical group layout': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-horizontal pf-m-vertical-on-md pf-m-horizontal-on-lg pf-m-vertical-on-xl pf-m-horizontal-on-2xl\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Responsive, horizontal, vertical group layout","lang":"html"}}>
      
    </Example>,
  'Default, auto columns width': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-auto-column-widths pf-m-3-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default, auto columns width","lang":"html"}}>
      
    </Example>,
  'Horizontal, auto column width': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-horizontal pf-m-auto-column-widths pf-m-2-col-on-lg\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal, auto column width","lang":"html"}}>
      
    </Example>,
  'Default, inline grid': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-3-col pf-m-inline-grid\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default, inline grid","lang":"html"}}>
      
    </Example>,
  'Display variant': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-display-lg pf-m-2-col-on-lg\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Display variant","lang":"html"}}>
      
    </Example>,
  'Description list group wrapper as card': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-2-col-on-lg\">\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Description list group wrapper as card","lang":"html"}}>
      
    </Example>,
  'Display lg and card variant': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-display-lg pf-m-2-col-on-lg\">\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Display lg and card variant","lang":"html"}}>
      
    </Example>,
  'Display 2xl and card variant': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-display-2xl pf-m-2-col-on-lg\">\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Display 2xl and card variant","lang":"html"}}>
      
    </Example>,
  'Display and card variant, three column on lg breakpoint': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-3-col-on-lg pf-m-display-lg\">\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n</dl>","title":"Display and card variant, three column on lg breakpoint","lang":"html"}}>
      
    </Example>,
  'Display and card variant, horizontal, modified term width': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-2-col-on-lg pf-m-display-lg pf-m-horizontal\"\n  style=\"--pf-c-description-list__term--width: 10ch;\"\n>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-card pf-m-description-list-group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n</dl>","title":"Display and card variant, horizontal, modified term width","lang":"html"}}>
      
    </Example>,
  'Icons on terms': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__term-icon\">\n        <i class=\"fas fa-cube\" aria-hidden=\"true\"></i>\n      </span>\n      <span\n        class=\"pf-c-description-list__text\"\n      >This is a long description that should wrap to multiple lines in cases where the viewport is quite narrow.</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__term-icon\">\n        <i class=\"fas fa-book\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__term-icon\">\n        <i class=\"fas fa-key\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__term-icon\">\n        <i class=\"fas fa-globe\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__term-icon\">\n        <i class=\"fas fa-flag\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Icons on terms","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["Term help text"])}
    {React.createElement(pageData.examples["Default, two column"])}
    {React.createElement(pageData.examples["Default, three column on lg breakpoint"])}
    {React.createElement(pageData.examples["Horizontal"])}
    {React.createElement(pageData.examples["Horizontal, two column"])}
    {React.createElement(pageData.examples["Horizontal, three column on lg breakpoint"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Compact horizontal"])}
    {React.createElement(pageData.examples["Fluid horizontal"])}
    {React.createElement(pageData.examples["Column fill"])}
    <AutoLinkHeader {...{"id":"auto-fit","size":"h2","className":"ws-title ws-h2"}}>
      {`Auto fit`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Auto-fit basic"])}
    {React.createElement(pageData.examples["Auto-fit, min width modified, grid template columns"])}
    {React.createElement(pageData.examples["Auto-fit, min width modified, responsive grid template columns"])}
    <AutoLinkHeader {...{"id":"responsive-column-definitions","size":"h2","className":"ws-title ws-h2"}}>
      {`Responsive column definitions`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default, responsive columns"])}
    {React.createElement(pageData.examples["Horizontal, responsive columns"])}
    {React.createElement(pageData.examples["Responsive, horizontal, vertical group layout"])}
    <AutoLinkHeader {...{"id":"auto-column-width","size":"h2","className":"ws-title ws-h2"}}>
      {`Auto-column-width`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default, auto columns width"])}
    {React.createElement(pageData.examples["Horizontal, auto column width"])}
    <AutoLinkHeader {...{"id":"inline-grid","size":"h2","className":"ws-title ws-h2"}}>
      {`Inline grid`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default, inline grid"])}
    {React.createElement(pageData.examples["Display variant"])}
    <AutoLinkHeader {...{"id":"card-variants","size":"h2","className":"ws-title ws-h2"}}>
      {`Card variants`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Cards can be used as `}
      <PatternflyThemeLink {...{"to":"../card#description-list-group-wrapper-card-variant"}}>
        {`description list group wrappers`}
      </PatternflyThemeLink>
      {`. Using cards in this way applies the card body padding directly to the card and enables the use of card modifiers within description list groups.`}
    </p>
    {React.createElement(pageData.examples["Description list group wrapper as card"])}
    {React.createElement(pageData.examples["Display lg and card variant"])}
    {React.createElement(pageData.examples["Display 2xl and card variant"])}
    {React.createElement(pageData.examples["Display and card variant, three column on lg breakpoint"])}
    {React.createElement(pageData.examples["Display and card variant, horizontal, modified term width"])}
    <AutoLinkHeader {...{"id":"with-icons","size":"h2","className":"ws-title ws-h2"}}>
      {`With icons`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Icons on terms"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
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
                {`title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible title for the description list. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`tabindex="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list__text.pf-m-help-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Inserts the `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list__text`}
              </code>
              {` into the tab order of the page so that it is focusable. `}
              <strong>
                {`Required when the element is clickable`}
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
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<dl>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the description list component. `}
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
                {`.pf-c-description-list__group`}
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
              {`Initiates a description list component group. `}
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
                {`.pf-c-description-list__term`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<dt>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a description list component term. `}
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
                {`.pf-c-description-list__description`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<dd>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a description list component description. `}
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
                {`.pf-c-description-list__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a description list component text element. Use a `}
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
              {` when a child of `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list__term`}
              </code>
              {`. `}
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
                {`.pf-c-description-list__term-icon`}
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
              {`Initiates a description list component term icon element.`}
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
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list for compact horizontal and vertical spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-display-lg`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list to have large display styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-display-2xl`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list to have 2xl display styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-fluid`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list.pf-m-horizontal`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list term width to be fluid.`}
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
                {`.pf-c-description-list__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates there is more information available for the description list component term text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-horizontal{-on-[sm, md, lg, xl, 2xl]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list component term and description pair to a horizontal layout.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-vertical{-on-[sm, md, lg, xl, 2xl]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list component term and description pair to a vertical layout.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-fill-columns`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list groups to fill columns from top to bottom, instead of rows from left to right.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-auto-column-widths`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list to format automatically.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-inline-grid`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list display to inline-grid.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-{1,2,3}-col{-on-[sm, md, lg, xl, 2xl]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list number of columns.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-description-list--GridTemplateColumns--min{-on-[breakpoint]}: {width}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the min value of the `}
              <code {...{"className":"ws-code"}}>
                {`grid-template-columns`}
              </code>
              {` declaration at optional `}
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
                {`--pf-c-description-list--m-horizontal__term--width{-on-[breakpoint]}: {width}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list.pf-m-horizontal`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list term width at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsDescriptionListHtmlDocs';
Component.pageData = pageData;

export default Component;
