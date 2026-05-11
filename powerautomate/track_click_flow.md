# TrackClickFlow

## Trigger
Power Apps (V2)

## Inputs
- ProductID
- ProductName
- UserEmail
- AffiliateLink

## Actions

### 1. Create Item (SharePoint)
Stores:
- ProductID
- ProductName
- UserEmail
- Timestamp

### 2. Return AffiliateLink
Returns affiliate link back to Power Apps.

## Workflow

User Clicks Buy
↓
Power Apps Triggers Flow
↓
SharePoint Stores Data
↓
Affiliate Link Returned
↓
User Redirected
