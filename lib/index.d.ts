import { Exception } from '@srclaunch/exceptions';
import { Analytics, User } from '@srclaunch/types';
export declare function sendPageLoad(): void;
export declare function sendWebAppRouteLoad(): void;
export declare function sendEvent({ data, exception, message, name, tags, }: {
    data?: Record<string, unknown>;
    exception?: Exception;
    message?: string;
    name: Analytics;
    tags?: {
        [key: string]: string | number | boolean | undefined | null;
    };
}): void;
export declare function identifyUser(id: User['id'], { email_address, first_name, last_name, login_count, premium_membership_active, }: {
    email_address: string;
    first_name?: string;
    last_name?: string;
    login_count?: number;
    premium_membership_active?: boolean;
}): void;
//# sourceMappingURL=index.d.ts.map