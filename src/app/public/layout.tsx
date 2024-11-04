import * as React from 'react';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core';

export default async function DashboardPagesLayout(props: { children: React.ReactNode }) {
    return <DashboardLayout hideNavigation><PageContainer>{props.children}</PageContainer></DashboardLayout>;
}