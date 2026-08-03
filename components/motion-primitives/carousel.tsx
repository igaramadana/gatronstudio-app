"use client";

import clsx from "clsx";
import {
  Children,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  type HTMLMotionProps,
  type PanInfo,
  type Transition,
} from "framer-motion";

type CarouselContextValue = {
  index: number;
  setIndex: (index: number) => void;
  itemsCount: number;
  setItemsCount: (count: number) => void;
  disableDrag: boolean;
};

const CarouselContext = createContext<CarouselContextValue | null>(null);

export function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used inside Carousel");
  }

  return context;
}

type CarouselProps = {
  children: ReactNode;
  className?: string;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (index: number) => void;
  disableDrag?: boolean;
  ariaLabel?: string;
};

export function Carousel({
  children,
  className,
  initialIndex = 0,
  index: controlledIndex,
  onIndexChange,
  disableDrag = false,
  ariaLabel = "Carousel",
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState(initialIndex);
  const [itemsCount, setItemsCount] = useState(0);
  const isControlled = controlledIndex !== undefined;
  const index = isControlled ? controlledIndex : internalIndex;

  const setIndex = useCallback(
    (nextIndex: number) => {
      const lastIndex = Math.max(0, itemsCount - 1);
      const safeIndex = Math.min(Math.max(nextIndex, 0), lastIndex);

      if (!isControlled) {
        setInternalIndex(safeIndex);
      }

      if (safeIndex !== index) {
        onIndexChange?.(safeIndex);
      }
    },
    [index, isControlled, itemsCount, onIndexChange],
  );

  useEffect(() => {
    if (itemsCount > 0 && index > itemsCount - 1) {
      setIndex(itemsCount - 1);
    }
  }, [index, itemsCount, setIndex]);

  const contextValue = useMemo(
    () => ({
      index,
      setIndex,
      itemsCount,
      setItemsCount,
      disableDrag,
    }),
    [disableDrag, index, itemsCount, setIndex],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setIndex(index - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setIndex(index + 1);
    }
  };

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={clsx("relative outline-none", className)}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </CarouselContext.Provider>
  );
}

type CarouselContentProps = Omit<
  HTMLMotionProps<"div">,
  "children" | "animate" | "transition" | "onDragEnd"
> & {
  children: ReactNode;
  transition?: Transition;
  dragThreshold?: number;
};

export function CarouselContent({
  children,
  className,
  transition,
  dragThreshold = 48,
  ...props
}: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag } = useCarousel();
  const dragX = useMotionValue(0);
  const itemsCount = Children.count(children);

  useEffect(() => {
    setItemsCount(itemsCount);
  }, [itemsCount, setItemsCount]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeDistance = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (swipeDistance <= -dragThreshold || swipeVelocity <= -500) {
      setIndex(index + 1);
      return;
    }

    if (swipeDistance >= dragThreshold || swipeVelocity >= 500) {
      setIndex(index - 1);
    }
  };

  return (
    <motion.div
      drag={disableDrag ? false : "x"}
      dragConstraints={disableDrag ? undefined : { left: 0, right: 0 }}
      dragElastic={disableDrag ? undefined : 0.08}
      dragMomentum={false}
      onDragEnd={disableDrag ? undefined : handleDragEnd}
      style={{ x: disableDrag ? undefined : dragX }}
      animate={{ translateX: `-${index * 100}%` }}
      transition={transition}
      className={clsx(
        "flex items-stretch touch-pan-y select-none",
        !disableDrag && "cursor-grab active:cursor-grabbing",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type CarouselItemProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  index: number;
};

export function CarouselItem({
  children,
  className,
  index: itemIndex,
  ...props
}: CarouselItemProps) {
  const { index } = useCarousel();
  const isActive = index === itemIndex;

  return (
    <motion.div
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${itemIndex + 1}`}
      aria-hidden={!isActive}
      inert={isActive ? undefined : true}
      className={clsx("w-full min-w-0 shrink-0 grow-0", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
