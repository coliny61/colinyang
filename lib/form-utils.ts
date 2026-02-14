export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqebdqqw'

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export async function submitToFormspree(
  data: Record<string, string>
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) return { ok: true }
    return { ok: false, error: 'Something went wrong. Please try again or contact us directly.' }
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' }
  }
}
