import * as pulumi from "@pulumi/pulumi";
import * as digitalocean from "@pulumi/digitalocean";

const stackName = pulumi.getStack();

const project = new digitalocean.Project("honey-can-do", {
  description: `Pulumi managed infrastructure for honey-can-do (${stackName}) app`,
});

new digitalocean.App("app", {
  projectId: project.id,
  spec: {
    name: "honey-can-do",
    region: digitalocean.Region.NYC3,
    staticSites: [
      {
        name: "website",
        git: {
          branch: "main",
          repoCloneUrl: "https://github.com/ajchili/honey-can-do.git",
        },
        buildCommand: "npm run build",
        outputDir: "packages/asset/dist",
      },
    ],
  },
});
