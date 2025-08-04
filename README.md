# Unit Management Dashboard

## Overview

A web page with a unit management table, featuring pagination, sorting, search by Unit ID, and a lightbox gallery. Built with Next.js, React, Tailwind CSS.

## Features

- **Table**: Displays Unit ID, Name, Status, Price, Gallery.
- **Pagination**: Navigate data with page controls.
- **Sorting**: Sort columns (ascending/descending).
- **Search**: Filter by Unit ID in real-time.
- **Lightbox**: View unit images on thumbnail click.

## Implementation

- **Table**: React component (`UnitTable`) for dynamic data.
- **Pagination**: State-driven with Previous/Next buttons.
- **Sorting**: Click headers to toggle sort direction.
- **Search**: Case-insensitive Unit ID filtering.
- **Lightbox**: Lightbox2 for gallery images.

## Usage

- The API used for fetching the data is http://localhost:3005/listings
- Search by Unit ID to filter.
- Sort by clicking on the wirte sort options.
- Paginate with page controls.
- Click gallery thumbnail for lightbox.
