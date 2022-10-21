import Generator from "yeoman-generator";

export default class extends Generator {
  async _copyConfig(name, files, packages = []) {
    const answers = await this.prompt([
      {
        type: "confirm",
        name: name,
        message: `${name}?`,
      },
    ]);
    if (answers[name]) {
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
  async configCodeclimate() {
    await this._copyConfig("editorconfig", [".editorconfig"]);
  }
  async configEslint() {
    await this._copyConfig(
      "eslint",
      [".eslintignore", ".eslintrc.js"],
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
  async configTypescript() {
    await this._copyConfig("typescript", ["tsconfig.base.json"]);
  }
}
