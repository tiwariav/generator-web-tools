import BaseGenerator from "yeoman-generator";

export default class Generator extends BaseGenerator {
  constructor(args, options) {
    super(args, options);
    this.answers = {};
  }

  async _copyConfig(name, files, packages = [], options = {}) {
    const answers = await this.prompt([
      {
        message: `${name}?`,
        name: name,
        store: true,
        type: "confirm",
      },
    ]);
    this.answers = { ...this.answers, ...answers };
    if (
      answers[name] ||
      options.acceptedAnswers?.find((item) => this.answers[item])
    ) {
      for (const filename of files) {
        this.copyTemplate(filename, filename);
      }
      if (packages) {
        await this.addDevDependencies(packages);
      }
    }
  }

  async configBrowserslist() {
    await this._copyConfig(
      "browserslist",
      [".browserslistrc"],
      ["@tiwariav/browserslist-config"]
    );
  }
  async configCodeclimate() {
    await this._copyConfig("codeclimate", [".codeclimate.yml"]);
  }
  async configCommitlint() {
    await this._copyConfig(
      "commitlint",
      [".commitlintrc.json"],
      [
        "@commitlint/cli",
        "@commitlint/config-conventional",
        "@commitlint/config-lerna-scopes",
      ]
    );
  }
  async configEditorconfig() {
    await this._copyConfig("editorconfig", [".editorconfig"]);
  }
  async configEslint() {
    await this._copyConfig(
      "eslint",
      [".eslintignore", ".eslintrc.cjs"],
      [
        "eslint",
        "eslint-config-prettier",
        "eslint-config-react-app",
        "eslint-formatter-gitlab",
        "eslint-plugin-compat",
        "eslint-plugin-css-modules",
        "eslint-plugin-eslint-comments",
        "eslint-plugin-flowtype",
        "eslint-plugin-formatjs",
        "eslint-plugin-import",
        "eslint-plugin-jest",
        "eslint-plugin-jsx-a11y",
        "eslint-plugin-lodash",
        "eslint-plugin-only-warn",
        "eslint-plugin-prettier",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "eslint-plugin-sonarjs",
        "eslint-plugin-sort-keys-fix",
        "eslint-plugin-testing-library",
        "eslint-plugin-unicorn",
      ]
    );
  }
  async configGit() {
    await this._copyConfig("gitignore", [".gitignore"]);
  }
  async configGitActions() {
    await this._copyConfig("gitactions", [".github"]);
  }
  async configGitlab() {
    await this._copyConfig("gitlab", [".gitlab-ci.yml"]);
  }
  async configHusky() {
    await this._copyConfig("husky", [".husky"], ["husky"], {
      acceptedAnswers: ["commitlint", "lintstaged"],
    });
  }
  async configJest() {
    await this._copyConfig(
      "jest",
      ["jest.config.cjs"],
      [
        "@testing-library/jest-dom",
        "babel-jest",
        "jest",
        "jest-environment-jsdom",
        "jest-html-reporter",
        "jest-html-reporters",
        "jest-junit",
        "ts-jest",
      ]
    );
  }
  async configLintstaged() {
    await this._copyConfig(
      "lintstaged",
      [".lintstagedrc.json"],
      ["lint-staged", "eslint", "prettier"]
    );
  }
  async configPrettier() {
    await this._copyConfig("prettier", [".prettierignore"], ["prettier"]);
  }
  async configStorybook() {
    await this._copyConfig(
      "storybook",
      [".storybook"],
      [
        "@storybook/addon-actions",
        "@storybook/addon-docs",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-jest",
        "@storybook/addon-links",
        "@storybook/addon-postcss",
        "@storybook/addon-toolbars",
        "@storybook/builder-webpack5",
        "@storybook/manager-webpack5",
        "@storybook/mdx2-csf",
        "@storybook/react",
        "@storybook/testing-library",
        "wo-library",
      ]
    );
  }
  async configStylelint() {
    await this._copyConfig(
      "stylelint",
      [".stylelintrc.json"],
      [
        "stylelint",
        "stylelint-a11y",
        "stylelint-config-css-modules",
        "stylelint-config-prettier",
        "stylelint-config-rational-order",
        "stylelint-config-standard",
        "stylelint-declaration-block-no-ignored-properties",
        "stylelint-declaration-strict-value",
        "stylelint-use-nesting",
      ]
    );
  }
  async configTypescript() {
    await this._copyConfig("typescript", ["tsconfig.base.json"]);
  }
}
