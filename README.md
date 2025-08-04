Unit Management Dashboard
Overview
A web page with a unit management table, featuring pagination, sorting, search by Unit ID, and a lightbox gallery. Built with Next.js, React, Tailwind CSS, and Lightbox2.
Features

Table: Displays Unit ID, Name, Status, Price, Gallery.
Pagination: Navigate data with page controls.
Sorting: Sort columns (ascending/descending).
Search: Filter by Unit ID in real-time.
Lightbox: View unit images on thumbnail click.
Styling: Tailwind CSS for a modern UI.

Technologies

Next.js
React
Tailwind CSS (CDN)
Lightbox2 (CDN)
JavaScript (ES6+)

Implementation

Table: React component (UnitTable) for dynamic data.
Pagination: State-driven with Previous/Next buttons.
Sorting: Click headers to toggle sort direction.
Search: Case-insensitive Unit ID filtering.
Lightbox: Lightbox2 for gallery images.
Styling: Tailwind CSS with modern design.

Setup

Clone: git clone <repository-url>.
Install dependencies: npm install.
Run: npm run dev and open http://localhost:3000.
Edit data in the component for updates.

Usage

Search by Unit ID to filter.
Sort by clicking column headers.
Paginate with page controls.
Click gallery thumbnail for lightbox.

Limitations

Static data; large datasets may slow performance.
Requires internet for CDNs.

License
MIT License.
