import { BASE_URL } from '@env';

type RequestOption = Omit<RequestInit, 'body'> & {
  body?: object;
};

export type SuccessResponse<T> = { data: T; error?: null };
export type FailedResponse = { data?: null; error: { message: string } };

class APIClient {
  private static _apiClient: APIClient;

  private constructor() {}

  static get apiClient() {
    if (!this._apiClient) {
      this._apiClient = new APIClient();
    }

    return this._apiClient;
  }

  private apiRequest = async (url: string, init?: RequestOption) => {
    const { method = 'GET', body, headers } = init || {};

    const hasBody = ['POST', 'PUT'].includes(method);

    const customHeader = {
      ...headers,
      ...(hasBody && {
        'Content-Type': 'application/json',
      }),
    };

    const options = {
      method,
      headers: customHeader,
      ...(hasBody && {
        body: JSON.stringify(body),
      }),
    };

    const res = await fetch(`${BASE_URL}/${url}`, options);

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(
        `Failed to fetch ${url}: ${res.status} - ${errorMessage}`,
      );
    }

    return res;
  };

  async get<T>(
    url: string,
    queryParams?: Record<string, string>,
    init?: Omit<RequestOption, 'method'>,
  ): Promise<T> {
    // Add query parameters to URL
    const urlWithParams = queryParams
      ? `${url}?${new URLSearchParams(queryParams).toString()}`
      : url;

    const res = await this.apiRequest(urlWithParams, init);
    const contentType = res.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      const responseData = (await res.json()) as any;

      const data =
        responseData.data !== undefined ? responseData.data : responseData;

      return data as T;
    }

    throw new Error(`Unexpected response type from ${urlWithParams}`);
  }

  async post<T>(url: string, init?: Omit<RequestOption, 'method'>) {
    try {
      const res = await this.apiRequest(url, { ...init, method: 'POST' });
      return res.json() as T;
    } catch (error) {
      throw error;
    }
  }

  async put<T>(url: string, init?: Omit<RequestOption, 'method'>) {
    const res = await this.apiRequest(url, { ...init, method: 'PUT' });
    return res.json() as T;
  }

  async delete<T>(url: string, init?: Omit<RequestOption, 'method'>) {
    const res = await this.apiRequest(url, { ...init, method: 'DELETE' });
    return res.json() as T;
  }
}

export const apiClient = APIClient.apiClient;
