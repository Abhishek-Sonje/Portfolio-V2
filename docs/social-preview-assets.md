# Social preview assets

Each hero social link owns its preview images in `SOCIAL_LINKS` inside
`src/lib/data.ts`. This keeps profile-specific artwork out of the component.

```ts
preview: {
  avatarSrc: "/social/github-avatar.webp",
  bannerSrc: "/social/github-banner.webp",
  bannerAlt: "Abstract green developer workspace",
  bannerPosition: "center",
}
```

- Put local images in `public/social/` and reference them from `/social/...`.
- Use a square avatar. A 256 by 256 pixel WebP is sufficient for this card.
- Use a wide banner near a 10:3 aspect ratio. A 1000 by 300 pixel WebP gives
  enough room for responsive cropping.
- Set `bannerPosition` to a valid CSS `object-position` value such as `center`,
  `50% 30%`, or `right center` to control the crop.
- Set `bannerSrc` to `null` to use the network-colored fallback instead.
- Leave `bannerAlt` empty for decorative artwork. Add useful alt text only when
  the banner communicates information that is not repeated in the card copy.

GitHub, LinkedIn, and X can use different values. They currently share the
existing portfolio avatar and banner until custom assets are added.
