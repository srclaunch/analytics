import { Exception } from '@srclaunch/exceptions';
import {
  Analytics,
  Environment,
  EnvironmentType,
  User,
} from '@srclaunch/types';
import { getEnvironment } from '@srclaunch/utils';

export function sendPageLoad(): void {
  sendEvent({
    data: {},
    name: Analytics.WebPageLoadEvent,
    tags: { browser: 'Chrome' },
  });
}

export function sendWebAppRouteLoad(): void {
  sendEvent({
    data: {},
    name: Analytics.WebAppRouteLoadEvent,
    tags: { browser: 'Chrome' },
  });
}

export function sendEvent({
  data,
  exception,
  message,
  name,
  tags,
}: {
  data?: Record<string, unknown>;
  exception?: Exception;
  message?: string;
  name: Analytics;
  tags?: { [key: string]: string | number | boolean | undefined | null };
}): void {
  const environment: Environment = getEnvironment();

  if (environment.type === EnvironmentType.Production) {
    // global.window?.analytics?.track?.(eventName, eventProperties);
  } else {
    console.info('[Non-Prod-No-Send] Sending Event: ', {
      data,
      exception,
      message,
      name,
      tags,
    });
  }
}

export function identifyUser(
  id: User['id'],
  {
    email_address,
    first_name,
    last_name,
    login_count,
    premium_membership_active,
  }: {
    email_address: string;
    first_name?: string;
    last_name?: string;
    login_count?: number;
    premium_membership_active?: boolean;
  },
): void {
  sendEvent({
    data: {
      email_address,
      first_name,
      last_name,
      login_count,
      premium_membership_active,
      user_id: id,
    },
    name: Analytics.UserIdentifiedEvent,
  });
}
