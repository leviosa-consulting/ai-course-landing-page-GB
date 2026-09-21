"use client";

import { useSyncExternalStore } from "react";
import { course } from "@/content/course";
import { cohortStartLabel, daysUntilStart } from "@/lib/cohort";
import { Icon } from "./Icon";

const noSubscribe = () => () => {};
// Rounded to the minute so the snapshot stays stable between renders.
const getNow = () => Math.floor(Date.now() / 60_000) * 60_000;
const getServerNow = () => null;

/**
 * Next batch date + seats left. Computed in the visitor's browser, so a page built
 * weeks ago never shows an outdated countdown. After the start date it switches to
 * `cohort.closedMessage` automatically.
 */
export function CohortStatus({ variant }: { variant: "card" | "panel" | "inline" }) {
  const now = useSyncExternalStore(noSubscribe, getNow, getServerNow);
  const { seatsLeft, seatsTotal, showSeats, closedMessage } = course.cohort;
  const days = now === null ? null : daysUntilStart(now);
  const closed = days !== null && days <= 0;
  const seatsText = seatsLeft === 1 ? "1 seat left" : `${seatsLeft} seats left`;

  if (variant === "inline") {
    return (
      <p>
        {closed ? (
          closedMessage
        ) : (
          <>
            Next batch: <strong className="font-bold">{cohortStartLabel}</strong>
            {showSeats && <> · {seatsText}</>}
          </>
        )}
      </p>
    );
  }

  const filled = Math.min(100, Math.max(0, ((seatsTotal - seatsLeft) / seatsTotal) * 100));

  return (
    <div
      className={
        variant === "card"
          ? "rounded-2xl bg-white p-5 text-gb-plum shadow-xl ring-1 shadow-gb-plum/15 ring-gb-plum/10"
          : "rounded-2xl bg-gb-lilac-50 p-5 text-gb-plum"
      }
    >
      {closed ? (
        <p className="flex items-center gap-3 font-bold">
          <Icon name="calendar" className="size-5 shrink-0 text-gb-green-deep" />
          {closedMessage}
        </p>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gb-green/15 text-gb-green-deep">
              <Icon name="calendar" className="size-5" />
            </span>
            <div>
              <p className="text-xs font-bold tracking-wider text-gb-ink uppercase">Next batch starts</p>
              <p className="font-heading text-lg leading-tight font-bold">
                {cohortStartLabel}
                {days !== null && days <= 60 && (
                  <span className="ml-2 text-sm font-normal text-gb-ink">
                    · in {days} {days === 1 ? "day" : "days"}
                  </span>
                )}
              </p>
            </div>
          </div>
          {showSeats && (
            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span className="font-bold">{seatsText}</span>
                <span className="text-gb-ink">of {seatsTotal}</span>
              </div>
              <div
                className="mt-1.5 h-2 overflow-hidden rounded-full bg-gb-plum/10"
                role="progressbar"
                aria-label="Seats filled"
                aria-valuemin={0}
                aria-valuemax={seatsTotal}
                aria-valuenow={seatsTotal - seatsLeft}
              >
                <div className="h-full rounded-full bg-linear-to-r from-gb-green to-gb-green-deep" style={{ width: `${filled}%` }} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
