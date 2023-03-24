module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:rxjs/recommended",
        "plugin:@angular-eslint/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:import/recommended",
        "plugin:prettier/recommended"
      ],
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts"]
        }
      },
      rules: {
        // Enforce a convention in the order of import statements
        "import/order": [
          "error",
          {
            "newlines-between": "always",
            "groups": [
              [
                "builtin",
                "external"
              ],
              [
                "parent",
                "sibling",
                "index"
              ]
            ]
          }
        ],
        // This rule reports any imports that come after non-import statements
        "import/first": [
          "error"
        ],
        // Enforces having one empty line after the last top-level import statement
        "import/newline-after-import": [
          "error",
          {
            "count": 1
          }
        ],
        // Require explicit return types on functions and class methods.
        "@typescript-eslint/explicit-function-return-type": [
          "error"
        ],
        // Require explicit accessibility modifiers on class properties and methods
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            "accessibility": "no-public"
          }
        ],
        // Disallow variable declarations from shadowing variables declared in the outer scope.
        "@typescript-eslint/no-shadow": [
          "error"
        ],
        // Require a specific member delimiter style for interfaces and type literals.
        "@typescript-eslint/member-delimiter-style": [
          "warn",
          {
            "multilineDetection": "last-member"
          }
        ],
        // Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring
        "@typescript-eslint/no-unused-vars": ["warn", {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }],
        // Disallow conditionals where the type is always truthy or always falsy
        "@typescript-eslint/no-unnecessary-condition": "warn",
        // Require private members to be marked as readonly if they're never modified outside of the constructor
        "@typescript-eslint/prefer-readonly": "warn",
        // Disallow TypeScript namespaces
        "@typescript-eslint/no-namespace": [
          "warn",
          {
            "allowDeclarations": true
            
          }
        ],
        // Enforce consistent line breaks after opening and before closing braces
        "object-curly-newline": [
          "error",
          {
            "consistent": true
          }
        ],
        // Enforce camelcase naming convention
        "camelcase": [
          "error",
          {
            "properties": "never"
          }
        ],
        // Enforce consistent brace style for all control statements
        "curly": "error",
        // Require default cases in switch statements
        "default-case": "error",
        // Enforce default clauses in switch statements to be last
        "default-case-last": "error",
        // Enforce a maximum number of classes per file
        "max-classes-per-file": [
          "error",
          1
        ],
        // Disallow else blocks after return statements in if statements
        "no-else-return": "error",
        // Disallow unnecessary return await
        "no-return-await": "error",
        // Disallow shorthand type conversion
        "no-implicit-coercion": "error",

        // Angular Rules

        // Ensures component's changeDetection is set to ChangeDetectionStrategy.OnPush
        "@angular-eslint/prefer-on-push-component-change-detection": [
          "error"
        ],
        // Disallows using ViewEncapsulation.None
        "@angular-eslint/use-component-view-encapsulation": [
          "error"
        ],
        // Ensures ASC alphabetical order for NgModule metadata arrays for easy visual scanning
        "@angular-eslint/sort-ngmodule-metadata-arrays": [
          "error"
        ],
        // Ensures that classes implement lifecycle interfaces corresponding to the declared lifecycle methods
        // https://angular.io/guide/styleguide#style-09-01
        "@angular-eslint/use-lifecycle-interface": [
          "error"
        ],
        // Ensures that input bindings, including aliases, are not named or prefixed by the configured disallowed prefixes
        "@angular-eslint/no-input-prefix": [
          "error",
          {
            "prefixes": [
              "on"
            ]
          }
        ],
        // Classes decorated with @Component must have defined suffix in their name
        "@angular-eslint/component-class-suffix": [
          "error",
          {
            "suffixes": [
              "Component",
              "View",
              "Controller"
            ]
          }
        ],
        // This rule prevents the public or protected subjects
        "rxjs/no-exposed-subjects": "error",
        // Subject variables, properties and parameters don't conform to a naming scheme that identifies them as subjects
        "rxjs/suffix-subjects":  [
          "error"
        ],
        // This rule prevents the use of explicit type arguments when the type arguments can be inferred
        "rxjs/no-explicit-generics": "warn",
        // This rule effects failures if the buffer size of a replay buffer is not explicitly specified.
        "rxjs/no-ignored-replay-buffer": "warn"
      }
    },
    {
      files: ["*.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended"
      ],
      rules: {
        // Disallows the use of inline styles in HTML templates
        "@angular-eslint/template/no-inline-styles": "warn",
        // Ensures that HTML attributes and Angular bindings are sorted based on an expected order
        "@angular-eslint/template/attributes-order": [
          "error",
          {
            "alphabetical": true,
            "order": [
              "STRUCTURAL_DIRECTIVE",
              "TEMPLATE_REFERENCE",
              "INPUT_BINDING",
              "TWO_WAY_BINDING",
              "ATTRIBUTE_BINDING",
              "OUTPUT_BINDING"
            ]
          }
        ]
      }
    },
    {
      files: ["*.html"],
      extends: [
        "plugin:prettier/recommended"
      ],
      rules: {
        "prettier/prettier": [
          "error",
          {
            "parser": "angular"
          }
        ]
      }
    }
  ]
};
