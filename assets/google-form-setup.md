# Google Forms field mapping (NITROCOOL)

Your embedded-looking form on `pages/contact.html` posts directly to:

- https://docs.google.com/forms/d/e/1FAIpQLSe6_BlBzLczgWHWxVgqlPF4H38NTPCXn0xHoXFGzDmqKjbjAQ/formResponse

## IMPORTANT
Google Forms requires exact field names like `entry.123456789`.

Field mapping used on the site:
- `entry.2005620554` (Name)
- `entry.1045781291` (Email)
- `entry.1065046570` (Organization)
- `entry.1166974658` (Interest)
- `entry.839337160` (Subject)
- `entry.697773374` (Message)

## How to get the correct entry IDs
1. Open your form preview:
   https://docs.google.com/forms/d/e/1FAIpQLSe6_BlBzLczgWHWxVgqlPF4H38NTPCXn0xHoXFGzDmqKjbjAQ/viewform
2. In the browser, open **View Page Source**.
3. Search for `entry.`
4. Match each `entry.<number>` with its question label.
5. Replace the placeholders in `pages/contact.html`.

If you paste the “view-source” HTML here, I can map everything for you quickly.
