action "Only on master" {
  uses = "actions/bin/filter@d820d56839906464fb7a57d1b4e1741cf5183efa"
  needs = ["lint", "test:nuxt"]
  args = "branch master"
}

action "Deploy firetore and storage rules" {
  uses = "w9jds/firebase-action@7d6b2b058813e1224cdd4db255b2f163ae4084d3"
  secrets = ["FIREBASE_TOKEN"]
  args = "deploy"
  needs = ["Only on master"]
}

workflow "Build and test" {
  on = "pull_request"
  resolves = [
    "test:nuxt",
    "lint",
  ]
}

action "install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "lint" {
  uses = "borales/actions-yarn@master"
  needs = ["install"]
  args = "lint"
}

action "test:nuxt" {
  uses = "borales/actions-yarn@master"
  needs = ["install"]
  args = "test:nuxt"
}

action "Create release" {
  uses = "hyper-expanse/semantic-deliver-action@2.0.0"
  needs = ["Only on master"]
  secrets = ["GITHUB_TOKEN"]
}

workflow "Build, test and deploy" {
  on = "push",
  resolves = [
    "Deploy firetore and storage rules",
    "Create release",
  ]
}
