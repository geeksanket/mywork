# Complete n8n Workflow Setup Guide for ChatBot

This guide will walk you through creating a fully functional n8n workflow that integrates with your React chatbot to provide AI-powered responses.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Access n8n](#step-1-access-n8n)
3. [Step 2: Create a New Workflow](#step-2-create-a-new-workflow)
4. [Step 3: Add Webhook Trigger Node](#step-3-add-webhook-trigger-node)
5. [Step 4: Configure Webhook Settings](#step-4-configure-webhook-settings)
6. [Step 5: Add AI/LLM Node (OpenAI or Claude)](#step-5-add-aiim-node)
7. [Step 6: Add Response Node](#step-6-add-response-node)
8. [Step 7: Test the Workflow](#step-7-test-the-workflow)
9. [Step 8: Deploy & Activate](#step-8-deploy--activate)
10. [Step 9: Update Your Chatbot](#step-9-update-your-chatbot)
11. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- n8n account (free or paid)
  - Sign up at: https://n8n.io/
  - Or use cloud: https://app.n8n.cloud/
- OpenAI API key (for GPT-4/3.5) OR Claude API key (for Claude)
  - OpenAI: https://platform.openai.com/api-keys
  - Claude: https://console.anthropic.com/
- Your chatbot webhook URL (will be generated in Step 4)

---

## Step 1: Access n8n

1. Go to https://app.n8n.cloud/ (or your self-hosted n8n instance)
2. Sign in with your credentials
3. Click **"Create New"** to create a new workflow

---

## Step 2: Create a New Workflow

1. Click the **"+"** button in the top left or select **"New Workflow"**
2. You'll see an empty canvas
3. Name your workflow: Click on **"My Workflow"** in the top left and rename it to something like:
   - `Portfolio AI Chatbot`
   - `ChatBot Response Generator`
   - Any name you prefer

---

## Step 3: Add Webhook Trigger Node

1. Click the **"+"** button in the center of the canvas to add a node
2. Search for **"Webhook"** in the node list
3. Click on **"Webhook"** under the Trigger section
4. A Webhook node will appear on your canvas

---

## Step 4: Configure Webhook Settings

1. Click on the **Webhook** node to open its configuration
2. In the right panel, you'll see:
   - **HTTP Method**: Keep as `POST` (already selected)
   - **Path**: Change from "webhook" to **`portfolio-ai`**
   - Other settings can remain default

3. **Copy your webhook URL**:
   - Look for the webhook URL displayed (should look like):
	 ```
	 https://YOUR-INSTANCE.app.n8n.cloud/webhook/portfolio-ai
	 ```
   - Save this URL - you'll need it later

4. **Test Mode Setup**:
   - Make sure the Webhook is in the correct mode (the icon should show it's active)
   - If there's a toggle for "Test" mode, ensure it's activated for now (we'll switch later)

---

## Step 5: Add AI/LLM Node

### Option A: Using OpenAI (GPT-4 or GPT-3.5)

1. Click the **"+"** icon to the right of the Webhook node
2. Search for **"OpenAI"** in the node list
3. Click on **"OpenAI"** to add it
4. Configure the OpenAI node:
   - **Credential**: Click "Create New" and add your OpenAI API key
   - **Model**: Select `gpt-4-turbo` or `gpt-3.5-turbo`
   - **Prompt**: 
	 ```
	 You are a helpful AI assistant on a web developer's portfolio website. 
	 Answer questions about web development, programming, and the portfolio owner briefly and helpfully.

	 User message: {{ $json.message }}
	 ```
   - **Options**:
	 - Temperature: `0.7`
	 - Max tokens: `500`

### Option B: Using Anthropic Claude

1. Click the **"+"** icon to the right of the Webhook node
2. Search for **"Anthropic"** in the node list
3. Click on **"Anthropic"** to add it
4. Configure the Anthropic node:
   - **Credential**: Click "Create New" and add your Claude API key
   - **Model**: Select `claude-3-sonnet-20240229` (best value)
   - **Prompt**:
	 ```
	 You are a helpful AI assistant on a web developer's portfolio website. 
	 Answer questions about web development, programming, and the portfolio owner briefly and helpfully.

	 User message: {{ $json.message }}
	 ```
   - **Max tokens**: `500`

### Option C: Using Google Gemini

1. Click the **"+"** icon to the right of the Webhook node
2. Search for **"Google Gemini"** in the node list
3. Click on **"Google Gemini"** to add it
4. Configure:
   - **Credential**: Add your Google API key
   - **Model**: Select the latest Gemini model
   - **Prompt**: Use the same prompt as above
   - **Max output tokens**: `500`

---

## Step 6: Add Response Node

1. Click the **"+"** icon to the right of your AI node (OpenAI/Claude/Gemini)
2. Search for **"Respond to Webhook"** in the node list
3. Click on **"Respond to Webhook"** to add it
4. Configure the Response node:
   - **Body**: In the body field, enter:
	 ```json
	 {{ $json.text }}
	 ```
   - OR if that doesn't work, try:
	 ```json
	 {{ $json.choices[0].text }}
	 ```
   - **Status Code**: `200`
   - **Headers**: Keep default

---

## Step 7: Test the Workflow

1. **Enable Test Mode** (if not already enabled):
   - Look for "Test" button in the top right
   - Click it to enter test mode

2. **Click "Execute Workflow"** button (top right):
   - This activates the webhook for testing

3. **Test with curl** (in your terminal):
   ```bash
   curl -X POST https://YOUR-INSTANCE.app.n8n.cloud/webhook/portfolio-ai \
	 -H "Content-Type: application/json" \
	 -d '{"message": "What do you do?"}'
   ```

4. **Or test directly**:
   - Use Postman or Insomnia
   - Method: POST
   - URL: Your webhook URL
   - Body (JSON):
	 ```json
	 {
	   "message": "Hello, what is web development?"
	 }
	 ```

5. **Expected Response**:
   - You should see a response from OpenAI/Claude/Gemini with an answer

6. **Check Executions Tab**:
   - Click "Executions" tab to see the workflow run
   - Verify the response was generated

---

## Step 8: Deploy & Activate

### Switch from Test Mode to Production

1. **Close Test Mode**:
   - Click the "Test" button again to exit test mode

2. **Activate Workflow**:
   - Look for the **Toggle/Switch** button in the top right (near the save button)
   - It might show as "Inactive" or have a toggle icon
   - Click it to activate the workflow
   - It should now show "Active" or turn green

3. **Optional - Set to Production**:
   - If your workflow has a "Mode" dropdown, select "Production"
   - This ensures the webhook is always active, not just in test mode

4. **Save Your Workflow**:
   - Click the **"Save"** button in the top right
   - Confirm the workflow is active

---

## Step 9: Update Your Chatbot

1. Open your project's `src/components/ChatBot.tsx`
2. Find the line with the webhook URL:
   ```typescript
   const response = await fetch(
	 'https://sankeyy.app.n8n.cloud/webhook-test/portfolio-ai',
   ```

3. Replace it with your actual n8n webhook URL from Step 4:
   ```typescript
   const response = await fetch(
	 'https://YOUR-INSTANCE.app.n8n.cloud/webhook/portfolio-ai',
   ```

4. **Example** (if your instance is `sankey`):
   ```typescript
   const response = await fetch(
	 'https://sankey.app.n8n.cloud/webhook/portfolio-ai',
   ```

5. Save the file and rebuild:
   ```bash
   npm run build
   ```

6. Test your chatbot:
   - Open your portfolio website
   - Click the chatbot button in the bottom right
   - Send a message
   - You should now get a real AI response!

---

## Troubleshooting

### Issue: "Webhook is not registered"
- **Solution**: Make sure the workflow is **Active** (see Step 8)
- Click the toggle to activate it
- The workflow must be saved

### Issue: "404 Not Found" on webhook
- **Solution**: 
  - Verify the webhook path matches exactly (e.g., `portfolio-ai`)
  - Make sure you're using the correct n8n instance URL
  - Check that the workflow is deployed/active

### Issue: Getting empty responses
- **Solution**:
  - Check the "Respond to Webhook" node configuration
  - Verify the Response Body field contains: `{{ $json.text }}` or `{{ $json.choices[0].text }}`
  - Check the Executions tab to see the actual response data structure

### Issue: API key errors (401)
- **Solution**:
  - Verify your OpenAI/Claude/Gemini API key is valid
  - Check that your API key has credits/is active
  - Regenerate credentials in n8n

### Issue: Timeout errors
- **Solution**:
  - AI models can be slow; increase timeout:
	- In the AI node, find "Timeout" and set to `60` seconds
	- In the Respond to Webhook node, set timeout to `90` seconds

### Issue: CORS errors in browser console
- **Solution**: This shouldn't happen with n8n webhooks, but if it does:
  - The issue is likely with the API key or model configuration
  - Check the n8n workflow executions for the actual error

---

## Quick Reference: Webhook URL Format

Your webhook URL should follow this pattern:

```
https://[INSTANCE].app.n8n.cloud/webhook/[PATH]
```

Where:
- `[INSTANCE]` = your n8n instance name (e.g., "sankey", "portfolio", "bot")
- `[PATH]` = the path you set in the Webhook node (e.g., "portfolio-ai")

---

## Example Complete Workflow Diagram

```
[Webhook: portfolio-ai (POST)]
		 ↓
[OpenAI / Claude / Gemini]
		 ↓
[Respond to Webhook]
		 ↓
[Response sent to chatbot]
```

---

## Next Steps (Optional Enhancements)

Once your basic workflow is working, you can:

1. **Add Memory**: Store conversation history in a database
2. **Add Validation**: Validate incoming messages in a "Code" node
3. **Add Rate Limiting**: Prevent spam with built-in n8n features
4. **Add Logging**: Store all conversations in a spreadsheet or database
5. **Add Typing Animation**: Update the chatbot to show typing indicator during AI processing

---

## Support Resources

- n8n Documentation: https://docs.n8n.io/
- n8n Community: https://community.n8n.io/
- OpenAI Docs: https://platform.openai.com/docs/
- Claude Docs: https://docs.anthropic.com/
- Google Gemini: https://ai.google.dev/

---

## Checklist for Success

- [ ] n8n account created and logged in
- [ ] API key obtained (OpenAI / Claude / Gemini)
- [ ] New workflow created and named
- [ ] Webhook node added with path "portfolio-ai"
- [ ] AI node added and configured with API key
- [ ] Response to Webhook node added and configured
- [ ] Workflow tested successfully
- [ ] Workflow activated/deployed
- [ ] Chatbot webhook URL updated with correct n8n URL
- [ ] chatbot tested and receiving AI responses

Once all items are checked, your chatbot should be fully functional! 🚀
