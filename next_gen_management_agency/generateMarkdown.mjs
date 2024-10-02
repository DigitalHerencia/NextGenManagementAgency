// Import necessary modules
import fs from "fs"
import path from "path"

// Define the target files to be reviewed based on your tree structure
const targetFiles = [
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/.env",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/.eslintrc.json",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/.gitignore",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/next-env.d.ts",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/next.config.mjs",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/package-lock.json",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/package.json",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/postcss.config.mjs",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/README.md",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/tailwind.config.ts",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/tsconfig.json",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/prisma/schema.prisma",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/fonts/GeistMonoVF.woff",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/fonts/GeistVF.woff",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/favicon.ico",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/globals.css",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/layout.tsx",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/page.tsx",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/pages/auth/register.tsx",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/pages/auth/signin.tsx",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/pages/auth/signout.tsx",
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/types/next-auth.d.ts",
]

// Define the output markdown file path
const outputMarkdownFile =
    "H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/next_gen_management_agency/project_code_review.md"

// Function to write content to the markdown file
const writeMarkdownFile = (content, filePath) => {
    fs.writeFileSync(filePath, content, "utf8")
    console.log(`Markdown file written to ${filePath}`)
}

// Function to read and generate markdown content for each file
const generateMarkdownContent = (files) => {
    let markdownContent = `# Project Code Review\n\n`

    files.forEach((file) => {
        try {
            console.log(`Reading file: ${file}`)
            const fileContent = fs.readFileSync(file, "utf8")
            const fileName = path.basename(file)
            const filePath = file

            // Write markdown formatted content
            markdownContent += `## File: ${fileName}\n`
            markdownContent += `\`Path: ${filePath}\`\n\n`
            markdownContent += "```javascript\n"
            markdownContent += fileContent
            markdownContent += "\n```\n\n---\n\n"
        } catch (error) {
            console.error(`Error reading file ${file}: ${error.message}`)
        }
    })

    return markdownContent
}

// Main function to execute the script
const main = () => {
    try {
        // Generate the markdown content for all target files
        const markdownContent = generateMarkdownContent(targetFiles)

        // Write the generated content into the markdown file
        writeMarkdownFile(markdownContent, outputMarkdownFile)
    } catch (error) {
        console.error(`An error occurred: ${error.message}`)
    }
}

// Run the main function
main()
