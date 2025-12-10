# 📁 Upload Videos & Images Here!

## 🎬 To Add Videos to Your Gallery:

1. **Upload your .mp4 video file to THIS folder** (`public/gallery/`)

2. **Then edit:** `src/app/gallery/page.tsx`

3. **Add this line** to the `media` array:
   ```typescript
   { type: 'video', url: "/gallery/your-video-name.mp4", alt: "Video description" },
   ```

4. **Save and refresh!**

---

## 📖 Full Instructions:

See the complete guide at: `.same/HOW_TO_ADD_VIDEOS.md`

---

## ✅ Supported Video Formats:

- **MP4** (recommended) ← Best compatibility
- WebM
- MOV

**File size:** Keep under 50MB for best performance

**Resolution:** 1080p or lower

---

🎥 **Example filename:** `birthday-event-2024.mp4`
