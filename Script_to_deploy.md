# Deploying Static Content to GitHub Pages

These instructions will guide you through the process of deploying static content to GitHub Pages using a provided YAML file. 

## Prerequisites

- A GitHub account
- A repository with static content

## Steps

1. **Fork the repository**: Fork the repository that contains your static content. This will create a copy of the repository under your GitHub account.

2. **Enable GitHub Pages**: Go to the repository's settings and scroll down to the "GitHub Pages" section. Select the "master" branch as the source and click "Save". This will enable GitHub Pages for your repository.

3. **Create a new workflow**: In your forked repository, click on the "Actions" tab and click "New workflow". This will open the workflow editor.

4. **Copy the YAML file**: Copy the provided [static.yml](https://github.com/your-username/your-repo-name/blob/master/.github/workflows/static.yml) file and paste it into the workflow editor.

5. **Customize the YAML file**: Update the YAML file as needed to match your repository structure and workflow needs. Specifically, update the paths in the `path` field in the `Upload artifact` step to match the location of your static content.

6. **Commit and push changes**: Once you have made the necessary updates to the YAML file, commit and push the changes to the repository.

7. **Verify the deployment**: Go to the "Actions" tab and check that the workflow has been triggered and completed successfully. You can also check the GitHub Pages URL specified in the YAML file to verify that your static content has been deployed.

That's it! Your static content should now be deployed to GitHub Pages. Any changes you make to your repository's `master` branch will automatically trigger a new deployment to GitHub Pages.
