"use client"
import { RefObject, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)

interface ProductPreviewProps {
  className?: string
  productSrc: string
  productHeight?: number
  productWidth?: number
  scaleFactor?: number
  rotate?: number
  length?: number
  scroller?: RefObject<HTMLElement>
  start?: string
  articleTop: {
    title: {
      text: string
      className?: string
    }
    description: {
      text: string
      className?: string
    }
    icon?: React.ReactNode
    imageSrc?: string // NEW: per-top-item image
    // ... NEW per-item overrides to align/scale images consistently
    imageScale?: number
    imageOffsetX?: number // px
    imageOffsetY?: number // px
    imageRotate?: number // deg
    imageObjectFit?: "cover" | "contain"
  }[]
  articleBottom: {
    title: {
      text: string
      className?: string
    }
    description: {
      text: string
      className?: string
    }
    icon?: React.ReactNode
  }[]
  // NEW: global defaults for image sizing/position so all images look consistent
  imageDefaults?: {
    scale?: number
    offsetX?: number // px
    offsetY?: number // px
    rotate?: number // deg
    objectFit?: "cover" | "contain"
    maxW?: string // e.g., "min(80vw, 900px)"
    maxH?: string // e.g., "70vh"
  }
}

export function ProductPreview({
  className,
  productSrc,
  productHeight = 298,
  productWidth = 1250,
  scaleFactor = 0.1,
  rotate = 30,
  scroller,
  start = "top top",
  articleTop,
  articleBottom,
  length = (articleTop.length * 2 - 1) * 50,
  imageDefaults = {
    // Increased defaults for better presence
    scale: 1.35,
    offsetX: 0,
    offsetY: 0,
    rotate: 0,
    objectFit: "contain",
    maxW: "min(92vw, 1200px)",
    maxH: "min(82vh, 880px)",
  },
}: ProductPreviewProps) {
  const mainRef = useRef<HTMLElement>(null)
  const dividerTopRef = useRef<HTMLSpanElement>(null)
  const dividerBottomRef = useRef<HTMLSpanElement>(null)
  const articleTopRef = useRef<HTMLElement>(null)
  const articleBottomRef = useRef<HTMLElement>(null)
  const [currentTopIndex, setCurrentTopIndex] = useState(-1)
  const [currentBottomIndex, setCurrentBottomIndex] = useState(-1)
  const instanceIdRef = useRef<string>(
    `rotating-text-${Math.random().toString(36).substring(2, 11)}`
  )
  const [forceUpdate, setForceUpdate] = useState(false)
  const handleProgress = (self: ScrollTrigger) => {
    const direction = self.direction
    const totalSteps = articleTop.length * 2 - 1
    const progress = Math.min(Math.max(self.progress, 0), 1) // Clamp between 0 and 1
    const stepSize = 1 / totalSteps
    const currentStep = Math.ceil(progress / stepSize)

    // Calculate indices based on step
    if (currentStep === 1) {
      setCurrentBottomIndex(0)
      setCurrentTopIndex(0)
    } else {
      if (direction === 1) {
        // Scrolling down
        const topIndex = Math.floor((currentStep + 1) / 2)
        const bottomIndex = Math.floor(currentStep / 2)
        if (currentStep % 2 == 0 && topIndex < articleTop.length) {
          setCurrentTopIndex(topIndex)
        } else if (bottomIndex < articleBottom.length) {
          setCurrentBottomIndex(bottomIndex)
        }
      } else {
        // Scrolling up
        const topIndex = Math.floor(currentStep / 2)
        const bottomIndex = Math.floor((currentStep - 1) / 2)
        if (currentStep % 2 == 0 && topIndex < articleTop.length) {
          setCurrentTopIndex(Math.max(topIndex, 0))
        } else if (bottomIndex < articleBottom.length) {
          setCurrentBottomIndex(Math.max(bottomIndex, 0))
        }
      }
    }
  }
  useEffect(() => {
    if (scroller?.current) {
      setForceUpdate(!forceUpdate)
    }
  }, [])
  useGSAP(() => {
    if (mainRef.current) {
      const existingTrigger = ScrollTrigger.getById(instanceIdRef.current)
      if (existingTrigger) {
        existingTrigger.kill()
      }
      gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start,
          end: `${length}% top`,
          scrub: true,
          scroller: scroller?.current ?? window,
          pin: true,
          onUpdate: handleProgress,
          // markers: true, // Consider disabling in production
          onLeaveBack: () => {
            setCurrentBottomIndex(-1)
            setCurrentTopIndex(-1)
            const t = gsap.timeline({ duration: 0.1 })
            t.to(dividerTopRef.current, {
              scaleX: 0,
              transformOrigin: "right",
            })
            t.to(
              dividerBottomRef.current,
              {
                width: "0%",
                opacity: 1,
              },
              "<"
            )
          },
          onEnter: () => {
            const t = gsap.timeline({ duration: 0.4 })
            t.fromTo(
              dividerTopRef.current,
              { scaleX: 0, transformOrigin: "right" },
              { scaleX: 1, opacity: 1 }
            )
            t.to(
              dividerBottomRef.current,
              {
                width: "100%",
                opacity: 1,
              },
              "<"
            )
          },
          id: instanceIdRef.current,
        },
      })
    }
  }, [forceUpdate])

  return (
    <>
      <main
        ref={mainRef}
        className={cn(
          className,
          "w-full h-full bg-black flex justify-center items-center dark:text-white text-white px-3"
        )}
      >
        <div className="relative flex justify-between flex-col w-[92vw] md:w-[80vw] h-[80vh] md:h-[90vh]">
          <article
            key={1}
            ref={articleTopRef}
            className="mt-10 w-1/2 flex flex-col "
          >
            {currentTopIndex != -1 && (
              <Translate
                arr={articleTop}
                index={currentTopIndex}
                type={"icon"}
                pos={1}
              />
            )}
            <span
              ref={dividerTopRef}
              className="mt-6 w-full opacity-0 h-[1px] bg-[#818081] relative transform scale-x-0"
            >
              <span className="absolute -right-1 top-0 -translate-y-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-gray-400"></span>
            </span>
            <div className="w-[60%] mr-auto">
              {currentTopIndex != -1 && (
                <Translate
                  arr={articleTop}
                  index={currentTopIndex}
                  type={"title"}
                  pos={1}
                />
              )}
              {currentTopIndex != -1 && (
                <Translate
                  arr={articleTop}
                  index={currentTopIndex}
                  type={"description"}
                  pos={1}
                />
              )}
            </div>
          </article>
          {(() => {
            const imgIndex = currentTopIndex !== -1 ? currentTopIndex : 0
            const item = articleTop?.[imgIndex]
            const currentImg = item?.imageSrc || productSrc
            const currentAlt = item?.title?.text || "preview"

            // Resolve per-item overrides with defaults
            const baseScale = item?.imageScale ?? imageDefaults.scale ?? 1
            const scale = baseScale * 1.15 // global boost
            const offsetX = item?.imageOffsetX ?? imageDefaults.offsetX ?? 0
            const offsetY = item?.imageOffsetY ?? imageDefaults.offsetY ?? 0
            const extraRotate = item?.imageRotate ?? imageDefaults.rotate ?? 0
            const objectFit = item?.imageObjectFit ?? imageDefaults.objectFit ?? "contain"
            const maxW = imageDefaults.maxW ?? "min(80vw, 900px)"
            const maxH = imageDefaults.maxH ?? "70vh"

            // Compose transform relative to centered container
            const transform = `translate(${offsetX}px, ${offsetY}px) rotate(${(rotate ?? 0) + extraRotate}deg) scale(${scale})`

            return (
              <div
                key={currentImg}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
                style={{ width: maxW, height: maxH }}
              >
                <img
                  src={currentImg}
                  alt={currentAlt}
                  decoding="async"
                  loading="lazy"
                  style={{
                    height: "100%",
                    width: "auto",
                    transform,
                    transformOrigin: "center",
                    objectFit,
                    backfaceVisibility: "hidden",
                    WebkitFontSmoothing: "antialiased",
                    willChange: "transform",
                    filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.55))",
                  }}
                  className="select-none"
                  draggable={false}
                />
              </div>
            )
          })()}
          <article
            key={2}
            ref={articleBottomRef}
            className="ml-auto mb-10 w-1/2 flex flex-col "
          >
            {currentBottomIndex != -1 && (
              <Translate
                arr={articleBottom}
                index={currentBottomIndex}
                type={"icon"}
                pos={2}
              />
            )}
            <span
              ref={dividerBottomRef}
              className="mt-10  w-0 opacity-0 h-[1px] bg-[#818081] relative"
            >
              <span className="absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-gray-400"></span>
            </span>
            <div className="w-[60%] ml-auto">
              {currentBottomIndex != -1 && (
                <Translate
                  arr={articleBottom}
                  index={currentBottomIndex}
                  type={"title"}
                  pos={2}
                />
              )}
              {currentBottomIndex != -1 && (
                <Translate
                  arr={articleBottom}
                  index={currentBottomIndex}
                  type={"description"}
                  pos={2}
                />
              )}
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

interface TranslateProps {
  arr: ProductPreviewProps["articleTop"]
  index: number
  type: keyof TranslateProps["arr"][number]
  pos: 1 | 2
}

const Translate: React.FC<TranslateProps> = ({ arr, index, type, pos }) => {
  const previousIndex = useRef<number | null>(null)
  const translateRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const safeIndex = Math.max(index, 0) // Ensure index is non-negative

  const direction =
    previousIndex.current && safeIndex < previousIndex.current
      ? "backward"
      : "forward"

  useGSAP(() => {
    if (!contentRef.current) return
    const height = contentRef.current.offsetHeight
    const ease = "power2.inOut"

    if (direction === "forward") {
      gsap.fromTo(
        contentRef.current,
        { y: height, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease }
      )
    } else if (direction === "backward") {
      gsap.fromTo(
        contentRef.current,
        { y: -height, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease }
      )
    } else {
      // Initial animation
      gsap.fromTo(
        contentRef.current,
        { y: height, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease }
      )
    }
  }, [index])

  useEffect(() => {
    previousIndex.current = safeIndex
  }, [safeIndex])

  if (index < 0) return

  const renderContent = () => {
    if (safeIndex >= arr.length) return null // Handle overflow
    switch (type) {
      case "title":
        return arr[safeIndex].title.text
      case "description":
        return arr[safeIndex].description.text
      case "icon":
        return arr[safeIndex].icon
      default:
        return null
    }
  }

  const getClassName = () => {
    switch (type) {
      case "title":
        return cn("text-7xl mb-5", arr[safeIndex].title.className)
      case "description":
        return cn("text-sm", arr[safeIndex].description.className)
      case "icon":
        return cn(pos === 1 ? "py-3" : "w-[60%] ml-auto py-3")
      default:
        return ""
    }
  }

  return (
    <div ref={translateRef} className="overflow-hidden min-h-fit ">
      <div ref={contentRef} className={getClassName()}>
        {renderContent()}
      </div>
    </div>
  )
}
