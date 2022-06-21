import { Card, FormLayout, TextField } from "@shopify/polaris";
import { useCountdown } from "../../../hook/useCountdown";

type TProps = {};

export const TimeSetting: React.FC<TProps> = () => {
  const { countdown, setStartTime, setEndTime } = useCountdown();

  const getTimeString = (timestamp: number): string => {
    return new Date(timestamp).toISOString().replace(/:\d+.\d+Z$/, "");
  };

  const { endTime, startTime } = countdown.timer;
  return (
    <Card title="Time">
      <Card.Section subdued>
        <FormLayout>
          <FormLayout.Group>
            <TextField
              label="Start At:"
              onChange={(value) => {
                setStartTime(new Date(`${value}:00.000Z`).getTime());
              }}
              value={getTimeString(startTime)}
              autoComplete=""
              type="datetime-local"
              helpText="Time to show countdown bar"
            />
            <TextField
              label="End At:"
              onChange={(value) =>
                setEndTime(new Date(`${value}:00.000Z`).getTime())
              }
              value={getTimeString(endTime)}
              autoComplete=""
              type="datetime-local"
              helpText="Countdown time"
            />
          </FormLayout.Group>
        </FormLayout>
      </Card.Section>
    </Card>
  );
};
