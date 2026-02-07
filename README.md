# 🤰🏽 MayaCare
> **Maya** (Greek: *Maia*): "Good Mother," "Nurturer," or "Midwife."

**MayaCare is a privacy-first maternal health dashboard designed to close the racial mortality gap by empowering Black mothers with AI-driven triage, generative advocacy scripts, and postpartum monitoring.**

---

## The Gap
In the United States, **Black mothers are 3x more likely to die** from pregnancy-related complications than white mothers.
* **80%** of these deaths are preventable.
* Education is not a shield: A Black woman with a Master's degree is at higher risk than a white woman with a high school diploma.
* The root cause is often **dismissal**—symptoms like headaches or vision changes are written off as "stress" until it is too late.

## The Solution
MayaCare acts as a digital safety net that intervenes at the moment of dismissal. We focus on three core pillars:

1.  **AI Symptom Triage:** Instantly differentiates "normal" pregnancy discomfort from life-threatening red flags (like Preeclampsia) using clinical logic.
2.  **Generative Advocacy Engine:** If a risk is detected, the app scripts *exactly* what the mother needs to say to her provider to ensure she is tested and documented.
3.  **The "4th Trimester" Bridge:** A postpartum timeline that monitors risks (like cardiovascular spikes) for weeks after hospital discharge.

---

##  How We Built It (Tech Stack)
For this hackathon, we prioritized **Accessibility**, **Speed**, and **Data Privacy**.

* **Frontend:** [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
    * *Why:* Lightning-fast performance and component reusability.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
    * *Why:* Mobile-first utility classes ensure the app works on any device, anywhere.
* **Architecture:** Client-Side Logic
    * *Why:* **Privacy is paramount.** We architected the symptom triage logic to run entirely in the browser. No sensitive health data is sent to a server during the triage process, ensuring users can check risks without fear of data exposure.

---

##  Features

### 1. Privacy-First Dashboard
A calm, clutter-free interface that respects the user's mental load.

### 2. The Advocacy Script
* **Input:** "I have a headache and blurry vision."
* **MayaCare Output:** "I am concerned about Preeclampsia. I am requesting a blood pressure check and a urine protein test. Please document in my chart that I made this request."

### 3. Postpartum Timeline
Visualizing the "danger zones" of the 4th trimester so mothers aren't caught off guard by delayed complications.

---

## Running Locally

To run MayaCare locally, follow these steps:

### Prerequisites
* Node.js (v14 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [replace with git link]
    cd [repo name/folder name]
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:5173` to view the app.

---

## What's Next? (Roadmap)
* **Phase 2 (Integration):** Implement FHIR standards to push "Advocacy Reports" directly to hospital EHR systems (Epic/Cerner).
* **Phase 3 (Intelligence):** Integrate wearable API (Apple Watch/Fitbit) for passive heart rate and blood pressure monitoring.

---

## The Team
Built with 💜 at Grambling State University.

* **Jason Chimnidinma** 
* **Angel Antwi-Mensah** 
* **Vensen Sibanda** 
* **Maya Mukabe** 

