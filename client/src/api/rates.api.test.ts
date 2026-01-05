import { getMonthlyRates } from './rates.api';

global.fetch = vi.fn();

describe('getMonthlyRates', () => {
  it('returns data on success', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => [{ month: '01', avg_rate: '1' }]
    });

    const data = await getMonthlyRates();

    expect(fetch).toHaveBeenCalled();
    expect(data).toEqual([{ month: '01', avg_rate: '1' }]);
  });

  it('throws error on failed request', async () => {
    (fetch as any).mockResolvedValueOnce({ ok: false });

    await expect(getMonthlyRates()).rejects.toThrow('API error');
  });
});
