# Contributing

Thank you for your interest in contributing to QR Redirect!

## How to add your QR Code

To add your own QR code redirect, you need to update the `data/redirects.csv` file and submit a Pull Request.

### Steps:

1. **Fork the repository** at [https://github.com/Intelligent-Systems-Design-Lab-SRM/qr-redirect](https://github.com/Intelligent-Systems-Design-Lab-SRM/qr-redirect).
2. **Clone your fork** to your local machine.
3. **Open the data file:** Navigate to `data/redirects.csv`.
4. **Add your details:** Add a new row with your unique ID and information.
   The format is:
   ```csv
   id,name,designation,active,redirect
   <your_unique_id>,<Your Name>,<Your Designation>,TRUE,<your_destination_url>
   ```
   *Example:*
   ```csv
   10,Alice Smith,Developer,TRUE,https://alicesmith.dev
   ```
5. **Commit your changes:**
   ```bash
   git add data/redirects.csv
   git commit -m "Add redirect for Alice Smith"
   ```
6. **Push to your fork** and **Create a Pull Request** against the main repository.

Once your Pull Request is reviewed and merged, your QR code redirect will be live!
