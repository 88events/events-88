# 🎥 How to Add Videos to Your Gallery

## ✅ Video Support is ENABLED!

Your gallery now supports both **images** and **videos with sound**!

Videos will:
- ✨ Show with a **play button** overlay in the grid
- 🎬 Open in **full-screen player** with controls when clicked
- 🔊 Play with **sound** (unmute with video controls)
- 📱 Work on **all devices** (mobile & desktop)
- ⚡ Deploy automatically with **unlimited bandwidth** on Cloudflare

---

## 📹 Step-by-Step: Add a Video

### **Step 1: Upload Your Video File**

1. **Look at the left sidebar** in Same (the file tree)

2. **Navigate to the folder:**
   ```
   events-88
    └── public
         └── gallery  ← Upload here!
   ```

3. **Upload your video:**
   - **Option A:** Right-click on `gallery` folder → **"Upload Files"**
   - **Option B:** Drag and drop your video file into the `gallery` folder

4. **Name your file clearly:**
   - ✅ Good: `birthday-party-2024.mp4`
   - ✅ Good: `wedding-reception-highlights.mp4`
   - ❌ Avoid: `video1.mp4` or `VID_1234.mp4`

---

### **Step 2: Add Video to Gallery Code**

1. **Open the gallery page:**
   - In Same's file tree, click: `events-88/src/app/gallery/page.tsx`

2. **Find the `media` array** (around lines 14-35)

3. **Add your video** between images:

```typescript
const media: MediaItem[] = [
  { type: 'image', url: "/gallery/IMG_0493.jpeg", alt: "Taco bar", rotate: 0 },
  { type: 'image', url: "/gallery/IMG_2954.jpeg", alt: "Dessert station", rotate: 0 },

  // 🎥 ADD YOUR VIDEO HERE:
  {
    type: 'video',
    url: "/gallery/birthday-party-2024.mp4",  // ← Match your filename!
    alt: "Birthday celebration with dancing and live music"
  },

  { type: 'image', url: "/gallery/IMG_0489.jpeg", alt: "Fresh taco", rotate: 0 },
  // ... rest of images ...
];
```

4. **Save the file** (Ctrl+S or Cmd+S)

5. **Refresh your preview** to see the video!

---

## 📝 Complete Example

Here's what it looks like with multiple videos:

```typescript
const media: MediaItem[] = [
  // Images
  { type: 'image', url: "/gallery/IMG_0493.jpeg", alt: "Taco bar setup", rotate: 0 },

  // Video 1
  {
    type: 'video',
    url: "/gallery/wedding-ceremony.mp4",
    alt: "Beautiful outdoor wedding ceremony"
  },

  // More images
  { type: 'image', url: "/gallery/IMG_2954.jpeg", alt: "Chocolate fountain", rotate: 0 },
  { type: 'image', url: "/gallery/IMG_0489.jpeg", alt: "Fresh taco", rotate: 0 },

  // Video 2
  {
    type: 'video',
    url: "/gallery/corporate-event-highlights.mp4",
    alt: "Corporate event highlights with catering service"
  },

  // More images...
];
```

---

## 🎬 Video Requirements

### **Best Formats:**
- **MP4** (H.264 codec) ← **RECOMMENDED** - Works everywhere
- WebM - Good for web
- MOV - Will work but larger file size

### **Optimal Settings:**
| Setting | Recommended | Maximum |
|---------|-------------|---------|
| **File Size** | 10-50 MB | 100 MB |
| **Resolution** | 1920x1080 (1080p) | 3840x2160 (4K) |
| **Frame Rate** | 30 fps | 60 fps |
| **Audio** | Yes (AAC codec) | Any |
| **Duration** | 10-60 seconds | 5 minutes |

### **Compress Large Videos:**

If your video is too big (>100MB), use one of these free tools:

1. **Online:**
   - [Clipchamp](https://clipchamp.com/) (Free, in-browser)
   - [FreeConvert](https://www.freeconvert.com/video-compressor)

2. **Desktop:**
   - [HandBrake](https://handbrake.fr/) (Free, powerful)
   - Settings: MP4, H.264, 1080p, 30fps, Audio: AAC

---

## 🎯 What Happens After You Add a Video?

### **In the Gallery Grid:**
- Video shows with a **gold play button** overlay
- Hover effect works like images
- Click to open full player

### **In the Lightbox (when clicked):**
- Video opens in beautiful full-screen player
- **Auto-plays** when opened
- Full controls: play/pause, volume, fullscreen, progress bar
- Navigate with arrow keys (← →)
- Close with X button or ESC key

---

## 🚀 Deployment & GitHub

### **Automatic Deployment:**

1. **Videos upload with your code** - When you push to GitHub, videos go too!

2. **Cloudflare handles it:**
   - ✅ Unlimited bandwidth (no extra cost)
   - ✅ Global CDN (fast worldwide)
   - ✅ Automatic optimization

3. **Push to GitHub:**
   ```bash
   git add public/gallery/your-video.mp4
   git add src/app/gallery/page.tsx
   git commit -m "Add event highlight video to gallery"
   git push origin main
   ```

4. **Cloudflare auto-deploys** in 2-3 minutes!

---

## 💡 Pro Tips

### **Tip 1: Mix Photos & Videos**
Place videos strategically between photos for visual variety:
```typescript
[image, image, VIDEO, image, image, image, VIDEO, image]
```

### **Tip 2: Use Descriptive Alt Text**
Good alt text helps with accessibility and SEO:
- ✅ "Wedding reception with 100+ guests dancing and celebrating"
- ❌ "Video 1"

### **Tip 3: Test on Mobile**
Videos are optimized for mobile, but always check the preview!

### **Tip 4: Keep Videos Short**
10-60 seconds is perfect. Longer videos should be on YouTube/Vimeo.

---

## 🐛 Troubleshooting

### **Video doesn't show up?**
1. Check filename matches exactly (case-sensitive!)
2. Make sure video is in `public/gallery/` folder
3. Refresh the page hard (Ctrl+Shift+R)
4. Check browser console for errors

### **Video won't play?**
1. Make sure it's .mp4 format
2. Try re-encoding with HandBrake (H.264 + AAC)
3. Test video plays locally on your computer first

### **Video is blurry/pixelated?**
Upload higher resolution (1080p minimum)

### **Video file too large?**
- Compress with HandBrake or Clipchamp
- Reduce resolution to 1080p
- Shorten duration if possible

---

## ❓ Need Help?

Just ask me:
- "Add this video to my gallery" (upload it first!)
- "The video won't play, can you check?"
- "How do I compress my video?"
- "Can I use YouTube videos?" (No, but you can embed them elsewhere!)

---

**Ready to add your first video?** Upload it to `public/gallery/` and ask me to add it for you! 🎬
