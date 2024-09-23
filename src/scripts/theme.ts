export function toggleTheme(theme: string | undefined | null) {
  if (!theme) {
    localStorage.setItem('theme-color', 'dark')
    document.body.setAttribute('data-theme', 'dark')
  }
  const toogle = theme === 'dark' ? 'light' : 'dark'

  localStorage.setItem('theme-color', toogle)
  document.body.setAttribute('data-theme', toogle)
}
